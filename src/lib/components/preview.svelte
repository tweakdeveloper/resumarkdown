<script lang="ts">
  import 'iconify-icon';

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

  async function performRender(event: MouseEvent) {
    event.preventDefault();
    console.log(
      await fetch('/render', {
        method: 'POST',
        body: await output,
        headers: { 'content-type': 'text/html' },
      }),
    );
  }
</script>

<main class:hidden class:mobile data-testid="preview-pane">
  {#await output}
    <p>processing...</p>
  {:then result}
    <iframe title="résumé preview" srcdoc={result}></iframe>
    <button type="submit" onclick={performRender}>
      <span>download</span>
      <iconify-icon icon="ion:download-outline" height="1.25em"></iconify-icon>
    </button>
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
      font-size: @font-s-sm;
      font-weight: @font-w-semibold;
      padding: @padding-md;

      &:focus {
        background-color: lighten(@color-dark, 20%);
      }

      &:hover {
        background-color: lighten(@color-dark, 15%);
      }

      & > iconify-icon,
      & > span {
        vertical-align: middle;
      }

      iconify-icon {
        height: 1.25em;
        width: 1.25em;
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
