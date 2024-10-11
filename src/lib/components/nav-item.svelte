<li><slot /></li>

<style lang="less">
  li {
    margin: 0;
    padding: @padding-md;
    text-align: center;
  }

  li:not(:last-of-type) {
    border-bottom: 1px solid @color-dark;
  }
</style>
