<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';

  import type { PageData } from './$types';

  import { pane } from '$lib/stores/nav.js';

  import CodeInput from '$lib/components/code-input.svelte';
  import Editor from '$lib/components/editor.svelte';
  import Headline from '$lib/components/headline.svelte';
  import NavItem from '$lib/components/nav-item.svelte';
  import NavTree from '$lib/components/nav-tree.svelte';
  import Preview from '$lib/components/preview.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let mobile: boolean = $state(data.mobile);

  function checkIsDesktop() {
    // TODO: figure out how to remove hard-coded value here
    mobile = !window.matchMedia('screen and (min-width: 1280px)').matches;

    if (!mobile && get(pane) === 'preview') {
      pane.set('content');
    }
  }

  onMount(() => {
    checkIsDesktop();

    window.addEventListener('resize', checkIsDesktop);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
    };
  });

  let markdown: string = $state('');
  let stylesheet: string = $state('');
</script>

<svelte:head>
  <title>resumarkdown</title>
</svelte:head>
<div>
  <Headline>resumarkdown</Headline>
  <NavTree {mobile}>
    <NavItem destination="content">content</NavItem>
    <NavItem destination="style">style</NavItem>
    {#if mobile}
      <NavItem destination="preview">preview</NavItem>
    {/if}
  </NavTree>
  <Editor pane="content" testid="content-pane">
    <CodeInput bind:code={markdown} />
  </Editor>
  <Editor pane="style" testid="style-pane">
    <CodeInput bind:code={stylesheet} />
  </Editor>
  <Preview {mobile} {markdown} {stylesheet} />
  <footer>
    <p>
      made with &#x2764; by
      <a href="https://github.com/tweakdeveloper" title="my github profile">@tweakdeveloper</a>
    </p>
    <a href="/attributions">attributions</a>
  </footer>
</div>

<style lang="less">
  div {
    align-content: start;
    display: grid;
    grid-template-areas:
      'headline'
      'navtree'
      'editor'
      'footer';
    grid-template-rows: min-content min-content 1fr;
    height: 100%;

    @media screen and (min-width: @sizes[lg]) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'headline headline'
        'navtree preview'
        'editor preview'
        'footer footer';
    }
  }

  footer {
    align-items: center;
    background-color: @color-dark;
    border-top: 2px solid @color-dark;
    box-sizing: border-box;
    color: @color-light;
    display: flex;
    flex-flow: column nowrap;
    gap: @padding-md-y;
    grid-area: footer;
    justify-content: space-between;
    padding: @padding-lg;

    @media screen and (min-width: @sizes[lg]) {
      flex-flow: row nowrap;
      gap: @padding-sm-y;
      padding: @padding-md;
    }
  }

  footer a {
    color: @color-light;
    transition: color 0.2s;

    &:visited {
      color: darken(@color-light, 30%);
    }

    &:hover {
      color: darken(@color-light, 20%);
    }

    &:active {
      color: darken(@color-light, 10%);
    }
  }

  footer p {
    margin: 0;
  }
</style>
