<script lang="ts">
  import { pane, type Pane } from '$lib/stores/nav';

  export let destination: Pane;

  function handleKey({ key }: KeyboardEvent) {
    if (key === ' ' || key === 'Enter' || key === 'Spacebar') {
      navigate();
    }
  }

  function navigate() {
    pane.set(destination);
  }
</script>

<li
  aria-controls={`pane-${$pane}`}
  aria-selected={destination === $pane}
  role="tab"
  tabindex="0"
  on:click={navigate}
  on:keyup={handleKey}
>
  <slot />
</li>

<style lang="less">
  li {
    font-weight: 600;
    margin: 0;
    padding: @padding-md;
    text-align: center;
  }

  li:not(:last-of-type) {
    border-bottom: 1px solid @color-dark;
  }
</style>
