<script lang="ts">
  import { slide } from 'svelte/transition';

  import NavToggle from './nav-toggle.svelte';

  export let mobile: boolean = true;

  let open: boolean = false;
</script>

<nav>
  {#if mobile}
    <NavToggle bind:navOpen={open} />
  {/if}
  {#if open || !mobile}
    <ul role="tablist" transition:slide={{ duration: 300 }}>
      <slot />
    </ul>
  {/if}
</nav>

<style lang="less">
  nav {
    grid-area: navtree;
  }

  ul {
    @border: 2px solid @color-dark;

    border-bottom: @border;
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media screen and (min-width: @sizes[lg]) {
      align-items: stretch;
      border-right: @border;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
