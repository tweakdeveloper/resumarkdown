<script lang="ts">
  import { pane as navStore, type Pane } from '$lib/stores/nav';

  export let pane: Pane;

  export let testid: string | undefined = undefined;

  // don't show pane if we're not the current pane
  let hidden: boolean;
  $: hidden = pane !== $navStore;

  // always show preview pane on a two column layout
  let preview: boolean;
  $: preview = pane === 'preview';
</script>

<div id={`pane-${pane}`} data-testid={testid} role="tabpanel" class:hidden class:preview>
  <slot />
</div>

<style lang="less">
  div {
    box-sizing: border-box;
    height: 100%;

    &.hidden {
      display: none;
    }

    @media screen and (min-width: @sizes[lg]) {
      border-right: 2px solid @color-dark;
      width: 50%;

      &.preview {
        border-right: unset !important;
        display: unset !important;
      }
    }
  }
</style>
