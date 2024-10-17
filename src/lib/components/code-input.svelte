<script lang="ts">
  interface Props {
    code: string;
  }

  let { code = $bindable() }: Props = $props();
</script>

<textarea bind:value={code}></textarea>

<style lang="less">
  textarea {
    .container-content();

    resize: none;
  }
</style>
