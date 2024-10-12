<nav>
  <ul id="nav-tree" role="tablist">
    <slot />
  </ul>
</nav>

<style lang="less">
  ul {
    border-bottom: 2px solid @color-dark;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media screen and (min-width: @sizes[lg]) {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
</style>
