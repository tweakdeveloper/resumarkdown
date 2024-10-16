<script lang="ts">
  import { type Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<header>
  <h1>{@render children()}</h1>
</header>

<style lang="less">
  h1 {
    background-color: @color-dark;
    font-size: @font-s-lg;
    color: @color-light;
    padding: @padding-md;
    text-align: center;
  }

  header {
    grid-area: headline;
  }
</style>
