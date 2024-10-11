<script lang="ts">
  import { pane, type Pane } from '$lib/stores/nav';

  export let destination: Pane;

  $: selected = destination === $pane;

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
  aria-selected={selected}
  role="tab"
  tabindex="0"
  class:selected
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
    transition: background-color 0.2s;
  }

  li.selected {
    background-color: darken(@color-light, 20%);
  }

  li:focus,
  li:hover {
    background-color: darken(@color-light, 10%);
  }

  li:not(:last-of-type) {
    border-bottom: 1px solid @color-dark;
  }
</style>
