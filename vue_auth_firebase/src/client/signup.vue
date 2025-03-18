<script setup lang="ts">
//import Head from "../components/Head.vue";

const handleSubmit = async function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if(!email){ return; }
  if(!password){ return; }

  const response = await fetch("/api/users/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
console.log(response);
  if (response.ok) {
    location.href = "/login";
  } else {
    alert("Error, save");
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-4">signup</h2>
      <p class="text-gray-500 mb-6"></p>
      <form >
        <div class="mb-4">
          <label htmlFor="email" class="block text-gray-700 text-sm font-bold mb-2">
            Email :
          </label>
          <input
            type="text"
            id="email"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
            required
          />
        </div>
        <div class="mb-6">
          <label htmlFor="password" class="block text-gray-700 text-sm font-bold mb-2">
            Password :
          </label>
          <input
            type="password"
            id="password"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
             @click="handleSubmit()"
          >
            Save
          </button>
        </div>
      </form>
      <hr class="my-2" />
      <a href="/login" class="mx-2" > [ Login ]</a>

    </div>
  </div>
</template>

<style scoped>
</style>
