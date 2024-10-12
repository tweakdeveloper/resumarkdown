<script lang="ts">
  import NavToggle from './nav-toggle.svelte';

  let open: boolean = false;

  let hidden: boolean;
  $: hidden = !open;
</script>

<nav>
  <NavToggle bind:navOpen={open} />
  <ul class:hidden role="tablist">
    <slot />
  </ul>
</nav>

<style lang="less">
  ul {
    border-bottom: 2px solid @color-dark;
    list-style-type: none;
    margin: 0;
    padding: 0;

    &.hidden {
      display: none;
    }

    @media screen and (min-width: @sizes[lg]) {
      align-items: center;
      display: flex !important;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
</style>
