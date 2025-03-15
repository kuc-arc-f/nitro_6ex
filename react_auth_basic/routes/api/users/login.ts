import { setCookie } from 'h3';
import LibConfig from '../../../src/lib/LibConfig';

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
console.log(body);
  const email = import.meta.env.VITE_USER_NAME;
  const password = import.meta.env.VITE_USER_PASSWORD;
  console.log("email=", email);
  //console.log("key=", LibConfig.COOKIE_AUTH_KEY);
  if(!(body.email === email && body.password === password)) {
    console.error('Error, Bad Request');
    event.node.res.statusCode = 400;
    return 'Bad Request';
  }
  setCookie(event, LibConfig.COOKIE_AUTH_KEY, email, { maxAge: 60 * 60 * 24 * 7 });
  return {data: body }
})

