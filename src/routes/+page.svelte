<script lang="ts">
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
