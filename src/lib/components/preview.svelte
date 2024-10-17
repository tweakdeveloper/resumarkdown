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

  let output: Promise<string> = $derived(renderPreview(markdown, stylesheet));
</script>

<main class:hidden class:mobile data-testid="preview-pane">
  {#await output}
    <p>processing...</p>
  {:then result}
    <iframe title="résumé preview" srcdoc={result}></iframe>
  {:catch err}
    <p style:color="red">error: {err}!</p>
  {/await}
</main>

<style lang="less">
  main {
    .container();

    grid-area: preview;

    iframe {
      .container-content();
    }

    &.mobile {
      grid-area: editor;

      &.hidden {
        display: none;
      }
    }
  }
</style>
