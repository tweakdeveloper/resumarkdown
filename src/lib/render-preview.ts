import rehypeDocument from 'rehype-document';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

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
      .use(rehypeStringify)
      .process(markdown),
  );
};

export default renderPreview;
