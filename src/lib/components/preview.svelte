<script lang="ts">
  import { pane } from '$lib/stores/nav';

  export let mobile: boolean;

  let hidden: boolean;
  $: hidden = mobile ? $pane !== 'preview' : true;

  export let markdown: string;
  export let stylesheet: string;
</script>

<main class:hidden class:mobile data-testid="preview-pane">
  <h2>markdown:</h2>
  <code>{markdown}</code>
  <h2>stylesheet:</h2>
  <code>{stylesheet}</code>
</main>

<style lang="less">
  main {
    grid-area: preview;

    &.mobile {
      grid-area: editor;

      &.hidden {
        display: none;
      }
    }
  }
</style>
