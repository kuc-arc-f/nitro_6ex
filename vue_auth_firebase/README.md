# vue_auth_firebase

 Version: 0.9.1

 Author  : 

 date    : 2025/03/15

 update  :

***
### Summary

Vue , firebase auth example

***
### related

* https://firebase.google.com/docs/auth/web/start?hl=ja

***
### Setup
* nitro.config.ts
* runtimeConfig: firebase set , add

```
export default defineNitroConfig({
  compatibilityDate: "2025-01-30",
  runtimeConfig: {
    firebaseApiKey: "",
    firebaseAuthDomain: "",
    firebaseProjectId: "",
    firebaseStorageBucket: "",
    firebaseMessageSenderId: "",
    firebaseAppId: ""
  }
});
```

***
# License

* MIT

***