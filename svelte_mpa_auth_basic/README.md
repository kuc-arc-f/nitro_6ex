# svelte_mpa_auth_basic

 Version: 0.9.1

 Author  : 

 date    : 2025/03/20

 update  :

***
### Summary

svelte , auth example

* nitro.config.ts : user data read


***
### Setup
* nitro.config.ts
* runtimeConfig: add

```
export default defineNitroConfig({
  compatibilityDate: "2025-01-30",
  runtimeConfig: {
    userName: "user1@example.com",
    userPasswd: "1234",
  }
});
```

***
# License

* MIT

***