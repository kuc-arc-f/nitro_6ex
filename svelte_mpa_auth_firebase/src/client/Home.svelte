<script lang="ts">
import Head from '../components/Head.svelte';
import axios from 'axios';

const testProc = async function(){
  const response = await axios.post('/api/test');
  console.log(response.data);
}
</script>

<main>
  <Head />
  <div>
    <h1 class="text-3xl font-bold">home</h1>
    <hr />
    <span><a href="/about" >[ about ]</a>
    </span>
    <hr />
    <button on:click={testProc} class="btn btn-primary">Save</button>
  </div>  
</main>

<style>
</style>
