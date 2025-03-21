import LibConfig from "./LibConfig";

const startProc = {

  getCookieValue: function (name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key === name) {
        return decodeURIComponent(value);
      }
    }
    return null;
  },

  start: function(){
    let ret = false;
    const parsedUrl = new URL(window.location.href);
    if(
        !(parsedUrl.pathname === '/login' ||
        parsedUrl.pathname === '/signup'
        )
    )
    {
      console.log("LibLayout.pathname=", parsedUrl.pathname);
      const name = LibConfig.COOKIE_AUTH_KEY;
      console.log("key=", name);
      const authValue = this.getCookieValue(name);
      console.log(authValue);
      if(!authValue){
        location.href = '/login';
        return;
      }
    }
    return ret;
  },

}
export default startProc;
