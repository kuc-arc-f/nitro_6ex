<script lang="ts">
import Head from '../components/Head.svelte';
import axios from 'axios';
import {haha} from "./About/fun";

const testProc = async function(){
  console.log("#testProc"); 
  const p1 = haha();
  console.log(p1);

  const response = await axios.post('/api/test');
  console.log(response.data);
}
</script>

<main>
  <Head />
  <div>
    <h1 class="text-3xl font-bold">about</h1>
    <hr />
    <span><a href="/" >[ home ]</a>
    </span>
    <hr />
    <button on:click={testProc} class="btn btn-primary">Save
    </button>

  </div>
</main>

<style>
</style>
