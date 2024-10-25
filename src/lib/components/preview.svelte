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
    <button>download</button>
  {:catch err}
    <p style:color="red">error: {err}!</p>
  {/await}
</main>

<style lang="less">
  main {
    .container();

    display: flex;
    flex-flow: column nowrap;
    gap: @padding-lg-y;
    grid-area: preview;

    button {
      .selectable();

      background-color: lighten(@color-dark, 10%);
      border: 1px solid @color-dark;
      border-radius: @border-r-xl;
      color: @color-light;
      font-weight: @font-w-semibold;
      padding: @padding-md;

      &:focus {
        background-color: lighten(@color-dark, 20%);
      }

      &:hover {
        background-color: lighten(@color-dark, 15%);
      }
    }

    iframe {
      .container-content();
    }

    &.mobile {
      grid-area: editor;

      &.hidden {
        display: none;
      }
    }

    @media screen and (min-width: @sizes[lg]) {
      gap: @padding-xl-y;
    }
  }
</style>
