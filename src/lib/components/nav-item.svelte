<script lang="ts">
  import { type Snippet } from 'svelte';

  import { pane, type Pane } from '$lib/stores/nav.js';

  interface Props {
    destination: Pane;
    children: Snippet;
  }

  let { destination, children }: Props = $props();

  let selected: boolean = $derived(destination === $pane);

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
  aria-controls={`pane-${destination}`}
  aria-selected={selected}
  role="tab"
  tabindex="0"
  class:selected
  onclick={navigate}
  onkeyup={handleKey}
>
  {@render children()}
</li>

<style lang="less">
  li {
    @separator: 1px solid @color-dark;

    font-weight: @font-w-semibold;
    margin: 0;
    padding: @padding-md;
    text-align: center;
    transition: background-color 0.2s;

    &.selected {
      background-color: darken(@color-light, 20%);
    }

    &:focus,
    &:hover {
      background-color: darken(@color-light, 10%);
    }

    &:not(:last-of-type) {
      border-bottom: @separator;
    }

    @media screen and (min-width: @sizes[lg]) {
      flex: 1;

      &:not(:last-of-type) {
        border-bottom: none;
        border-right: @separator;
      }
    }
  }
</style>
