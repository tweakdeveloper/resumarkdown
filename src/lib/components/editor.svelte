<script lang="ts">
  import { pane as navStore, type Pane } from '$lib/stores/nav';

  export let pane: Pane;

  export let testid: string | undefined = undefined;

  // don't show pane if we're not the current pane
  let hidden: boolean;
  $: hidden = pane !== $navStore;
</script>

<div id={`pane-${pane}`} data-testid={testid} role="tabpanel" class:hidden>
  <slot />
</div>

<style lang="less">
  div {
    grid-area: editor;

    &.hidden {
      display: none;
    }
  }
</style>
