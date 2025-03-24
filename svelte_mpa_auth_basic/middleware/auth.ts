import { getRequestURL, sendRedirect } from 'h3';
import LibConfig from "../src/lib/LibConfig";

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  console.log("#auth.pathname=", url.pathname);
  if (url.pathname.startsWith('/api/')) {
    return;
  }
  if(
    !(url.pathname === '/login' || url.pathname === '/signup' )
  )
  {
    const authValue = getCookie(event, LibConfig.COOKIE_AUTH_KEY);
    console.log("#auth.js.value=", authValue);
    if(authValue){
      event.context.user = { email: authValue }
    }else{
      event.context.user = null;
    }
  }
})