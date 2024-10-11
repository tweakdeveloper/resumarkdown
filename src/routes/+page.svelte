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
    <NavItem>content</NavItem>
    <NavItem>style</NavItem>
    <NavItem>preview</NavItem>
  </NavTree>
</header>
