<script lang="ts">
  import { pane as navStore, type Pane } from '$lib/stores/nav';

  export let pane: Pane;
</script>

<div id={`pane-${pane}`} hidden={pane !== $navStore} role="tabpanel"><slot /></div>
