<script lang="ts">
  export let code: string;
</script>

<textarea bind:value={code}></textarea>

<style lang="less">
  textarea {
    border: 1px solid @color-dark;
    border-radius: @border-r-xl;
    box-sizing: border-box;
    font-size: @font-s-md;
    height: .full-without-padding(@padding-lg-y) [];
    margin: @padding-lg;
    padding: @padding-lg;
    resize: none;
    width: .full-without-padding(@padding-lg-x) [];
  }
</style>
