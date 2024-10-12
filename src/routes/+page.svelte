<script lang="ts">
  import CodeInput from '$lib/components/code-input.svelte';
  import Content from '$lib/components/content.svelte';
  import Headline from '$lib/components/headline.svelte';
  import NavItem from '$lib/components/nav-item.svelte';
  import NavTree from '$lib/components/nav-tree.svelte';

  export let data;

  let markdown: string = '';
  let stylesheet: string = '';
</script>

<svelte:head>
  <title>resumarkdown</title>
</svelte:head>
<div>
  <header>
    <Headline>resumarkdown</Headline>
    <NavTree mobile={data.mobile}>
      <NavItem destination="content">content</NavItem>
      <NavItem destination="style">style</NavItem>
      <NavItem destination="preview">preview</NavItem>
    </NavTree>
  </header>
  <main>
    <Content pane="content" testid="content-pane">
      <CodeInput bind:code={markdown} />
    </Content>
    <Content pane="style" testid="style-pane">
      <CodeInput bind:code={stylesheet} />
    </Content>
    <Content pane="preview" testid="preview-pane">
      <dl>
        <dt>markdown:</dt>
        <dd>{markdown !== '' ? markdown : '???'}</dd>
        <dt>stylesheet:</dt>
        <dd>{stylesheet !== '' ? stylesheet : '???'}</dd>
      </dl>
    </Content>
  </main>
</div>

<style lang="less">
  // util
  .margin-v(@v) {
    margin-bottom: @v;
    margin-top: @v;
  }

  // styles
  div {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: start;
  }

  dd {
    .margin-v(@padding-lg-y);
  }

  dl {
    margin: 0;
    padding: @padding-xl;
  }

  main {
    flex-grow: 1;

    @media screen and (min-width: @sizes[lg]) {
      align-items: start;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
