<script lang="ts">
  import Content from '$lib/components/content.svelte';
  import Headline from '$lib/components/headline.svelte';
  import NavItem from '$lib/components/nav-item.svelte';
  import NavTree from '$lib/components/nav-tree.svelte';
</script>

<svelte:head>
  <title>resumarkdown</title>
</svelte:head>
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
    <p>content</p>
  </Content>
  <Content pane="style">
    <p>style</p>
  </Content>
  <Content pane="preview">
    <p>preview</p>
  </Content>
</main>

<style lang="less">
  p {
    margin: 0;
    padding: @padding-md;
  }
</style>
