import { type Element as HastElement, type Root as HastRoot } from 'hast';
import { h } from 'hastscript';
import rehypeDocument from 'rehype-document';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified, type Plugin } from 'unified';

const printScript = `
window.addEventListener('message', (evt) => {
  if (evt.data === 'print') {
    window.print();
  }
});
`;

const removePrintMarginsStyle = `
@page {
  margin-bottom: 0;
  margin-top: 0;
}
`;

const injectPrintScript: Plugin<[], HastRoot> = function () {
  return (tree) => {
    const printScriptNode = h('script', printScript);
    const htmlNode = tree.children.find(
      (node) => node.type === 'element' && node.tagName === 'html',
    ) as HastElement;
    const bodyNode = htmlNode.children.find(
      (node) => node.type === 'element' && node.tagName === 'body',
    ) as HastElement;
    bodyNode.children.push(printScriptNode);
  };
};

const injectRemovePrintMarginsStyle: Plugin<[], HastRoot> = function () {
  return (tree) => {
    const removePrintMarginsStyleNode = h('style', removePrintMarginsStyle);
    const htmlNode = tree.children.find(
      (node) => node.type === 'element' && node.tagName === 'html',
    ) as HastElement;
    const headNode = htmlNode.children.find(
      (node) => node.type === 'element' && node.tagName === 'head',
    ) as HastElement;
    headNode.children.push(removePrintMarginsStyleNode);
  };
};

const renderPreview = async (markdown: string, stylesheet: string): Promise<string> => {
  let allowedTags: string[] = ['body', 'head', 'html', 'style'];
  if (defaultSchema.tagNames) {
    allowedTags = [...defaultSchema.tagNames, ...allowedTags];
  }
  return String(
    await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeDocument, { style: stylesheet })
      .use(rehypeSanitize, {
        ...defaultSchema,
        allowDoctypes: true,
        tagNames: allowedTags,
      })
      .use(injectRemovePrintMarginsStyle)
      .use(injectPrintScript)
      .use(rehypeStringify)
      .process(markdown),
  );
};

export default renderPreview;
