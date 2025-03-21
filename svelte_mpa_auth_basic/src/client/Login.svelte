<script lang="ts">
//import {push, pop, replace} from 'svelte-spa-router'
  
const handleSubmit = async function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
console.log("response=", response.ok);
    if (response.ok) {
      location.href ="/";
    } else {
      alert("Invalid credentials.");
    }
  }
</script>
  
  <!-- markUp -->
  <div>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 class="text-2xl font-bold mb-4">Login</h2>
        <p class="text-gray-500 mb-6"></p>
        <form on:submit|preventDefault={handleSubmit}>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Email :
              <input
              type="text"
              id="email"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
              required
              />
            </label>
          </div>
          <div class="mb-6">
            <label  class="block text-gray-700 text-sm font-bold mb-2">
              Password :
              <input
              type="password"
              id="password"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
              required
            />
            </label>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              GO
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  <style>
  </style>
  