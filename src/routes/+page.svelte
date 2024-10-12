<script lang="ts">
  import CodeInput from '$lib/components/code-input.svelte';
  import Content from '$lib/components/content.svelte';
  import Headline from '$lib/components/headline.svelte';
  import NavItem from '$lib/components/nav-item.svelte';
  import NavTree from '$lib/components/nav-tree.svelte';
</script>

<svelte:head>
  <title>resumarkdown</title>
</svelte:head>
<div>
  <header>
    <Headline>resumarkdown</Headline>
    <NavTree>
      <NavItem destination="content">content</NavItem>
      <NavItem destination="style">style</NavItem>
      <NavItem destination="preview">preview</NavItem>
    </NavTree>
  </header>
  <main>
    <Content pane="content">
      <CodeInput />
    </Content>
    <Content pane="style">
      <CodeInput />
    </Content>
    <Content pane="preview">
      <p>preview</p>
    </Content>
  </main>
</div>

<style lang="less">
  div {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: start;
  }

  main {
    flex-grow: 1;
  }

  p {
    margin: 0;
    padding: @padding-md;
  }
</style>
