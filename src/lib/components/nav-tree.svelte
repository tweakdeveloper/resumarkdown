<script lang="ts">
  import { onMount } from 'svelte';

  import { navHeight } from '$lib/stores/layout';

  import NavToggle from './nav-toggle.svelte';

  let open: boolean = false;

  let hidden: boolean;
  $: hidden = !open;

  // magic to offset preview pane on desktop
  let navRef: HTMLElement;

  onMount(() => {
    $navHeight = navRef.getBoundingClientRect().height;
  });
</script>

<nav bind:this={navRef}>
  <NavToggle bind:navOpen={open} />
  <ul class:hidden role="tablist">
    <slot />
  </ul>
</nav>

<style lang="less">
  ul {
    @border: 2px solid @color-dark;

    border-bottom: @border;
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;

    &.hidden {
      display: none;
    }

    @media screen and (min-width: @sizes[lg]) {
      align-items: center;
      border-right: @border;
      display: flex !important;
      flex-direction: row;
      justify-content: space-evenly;
      width: 50%;
    }
  }
</style>
