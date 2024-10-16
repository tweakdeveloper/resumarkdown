<script lang="ts">
  import { type Snippet } from 'svelte';

  import { pane as navStore, type Pane } from '$lib/stores/nav.js';

  interface Props {
    pane: Pane;
    testid?: string;
    children?: Snippet;
  }

  let { pane, testid, children }: Props = $props();

  // don't show pane if we're not the current pane
  let hidden: boolean = $derived(pane !== $navStore);
</script>

<div id={`pane-${pane}`} data-testid={testid} role="tabpanel" class:hidden>
  {@render children?.()}
</div>

<style lang="less">
  div {
    grid-area: editor;

    &.hidden {
      display: none;
    }

    @media screen and (min-width: @sizes[lg]) {
      border-right: 2px solid @color-dark;
    }
  }
</style>
