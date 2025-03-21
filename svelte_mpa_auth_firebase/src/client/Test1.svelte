<script lang="ts">
  //import {link} from 'svelte-spa-router';
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
    <div>
      <h1 class="text-3xl font-bold">test1</h1>
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
  