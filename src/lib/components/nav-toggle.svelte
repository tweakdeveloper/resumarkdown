<script lang="ts">
  export let navOpen: boolean;

  // if nav is open, we should "hide" it on press. if not, we should "show" it.
  let action: string;
  $: action = navOpen ? 'hide' : 'show';

  function toggle() {
    navOpen = !navOpen;
  }
</script>

<button on:click={toggle}>{action} navigation</button>

<style lang="less">
  button {
    background-color: lighten(@color-dark, 10%);
    border: none;
    color: @color-light;
    font-size: @font-s-md;
    font-weight: @weight-semibold;
    padding: @padding-sm;
    width: 100%;

    @media screen and (min-width: @sizes[lg]) {
      display: none;
    }
  }
</style>
