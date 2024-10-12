<script lang="ts">
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  import { navHeight } from '$lib/stores/layout';

  import NavToggle from './nav-toggle.svelte';

  export let mobile: boolean = true;

  let open: boolean = false;

  // magic to offset preview pane on desktop
  let navRef: HTMLElement;

  onMount(() => {
    $navHeight = navRef.getBoundingClientRect().height;
  });
</script>

<nav bind:this={navRef}>
  <NavToggle bind:navOpen={open} />
  {#if open || !mobile}
    <ul role="tablist" transition:slide={{ duration: 300 }}>
      <slot />
    </ul>
  {/if}
</nav>

<style lang="less">
  ul {
    @border: 2px solid @color-dark;

    border-bottom: @border;
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media screen and (min-width: @sizes[lg]) {
      align-items: center;
      border-right: @border;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 50%;
    }
  }
</style>
