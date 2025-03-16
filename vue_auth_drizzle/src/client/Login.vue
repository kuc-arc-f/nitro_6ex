<script setup lang="ts">

const handleSubmit = async function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if(!email){ return; }
  if(!password){ return; }

  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
console.log("response=", response.ok);
  if (response.ok) {
    location.href = "/";
  } else {
    alert("Invalid credentials.");
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
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
            GO
          </button>
        </div>
      </form>
      <hr class="my-2" />
      <a href="/signup" class="mx-2" > [ Signup ]</a>

    </div>
  </div>
</template>

<style scoped>
</style>
