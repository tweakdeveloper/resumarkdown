<script lang="ts">
  interface Props {
    navOpen: boolean;
  }

  let { navOpen = $bindable() }: Props = $props();

  // if nav is open, we should "hide" it on press. if not, we should "show" it.
  let action: string = $derived(navOpen ? 'hide' : 'show');

  function toggle() {
    navOpen = !navOpen;
  }
</script>

<button onclick={toggle}>{action} navigation</button>

<style lang="less">
  button {
    background-color: lighten(@color-dark, 10%);
    border: none;
    color: @color-light;
    font-size: @font-s-md;
    font-weight: @font-w-semibold;
    padding: @padding-sm;
    width: 100%;
  }
</style>
