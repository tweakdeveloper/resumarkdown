<script lang="ts">
  import { pane } from '$lib/stores/nav.js';
  import renderPreview from '$lib/render-preview';

  interface Props {
    mobile?: boolean;
    markdown: string;
    stylesheet: string;
  }

  let { mobile = true, markdown, stylesheet }: Props = $props();

  let hidden: boolean = $derived(mobile ? $pane !== 'preview' : true);

  let output: Promise<string> = $derived.by(() => renderPreview(markdown, stylesheet));
</script>

<main class:hidden class:mobile data-testid="preview-pane">
  <h2>markdown:</h2>
  <code>{markdown}</code>
  <h2>stylesheet:</h2>
  <code>{stylesheet}</code>
  <h2>output:</h2>
  {#await output}
    <p>processing...</p>
  {:then result}
    <iframe title="résumé preview" srcdoc={result}></iframe>
  {:catch err}
    <p style:color="red">error: {err}!</p>
  {/await}
</main>

<style lang="less">
  code {
    display: block;
    padding: @padding-md-x 0;
  }

  main {
    grid-area: preview;
    margin: 0;
    padding: @padding-lg;

    &.mobile {
      grid-area: editor;

      &.hidden {
        display: none;
      }
    }
  }

  h2 {
    font-weight: @font-w-semibold;
    margin: 0;
    padding: 0;
  }
</style>
