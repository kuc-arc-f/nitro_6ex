<script>
import { onMount } from "svelte";
onMount(() => {
  console.log("#Head.svelte");
});
import startProc from "../lib/startProc";
startProc.start();
</script>

<!-- MarkUp -->
<div>
  <span><a href="/">[ Home ]</a>
  </span>
  <span><a href="/about">[ about ]</a>
  </span>
</div>

<style>
</style>
<!--
<span><a href="/login">[ login ]</a>
</span>
-->