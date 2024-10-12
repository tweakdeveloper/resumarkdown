<script lang="ts">
  import { pane, type Pane } from '$lib/stores/nav';

  export let destination: Pane;

  let selected: boolean;
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
  aria-controls={`pane-${destination}`}
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
    font-weight: @weight-semibold;
    margin: 0;
    padding: @padding-md;
    text-align: center;
    transition: background-color 0.2s;

    @media screen and (min-width: @sizes[lg]) {
      flex-grow: 1;
    }

    &.selected {
      background-color: darken(@color-light, 20%);
    }

    &:focus,
    &:hover {
      background-color: darken(@color-light, 10%);
    }

    &:not(:last-of-type) {
      @separator: 1px solid @color-dark;

      border-bottom: @separator;

      @media screen and (min-width: @sizes[lg]) {
        border-bottom: unset;
        border-right: @separator;
      }
    }
  }
</style>
