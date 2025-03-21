import { setCookie } from 'h3';
import LibConfig from '../../../src/lib/LibConfig';
const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body);
  console.log("userName=", config.userName);
  //console.log("key=", LibConfig.COOKIE_AUTH_KEY);
  if(!(body.email === config.userName && body.password === config.userPasswd)) {
    console.error('Error, Bad Request');
    event.node.res.statusCode = 400;
    return 'Bad Request';
  }
  setCookie(event, LibConfig.COOKIE_AUTH_KEY, body.email, { maxAge: 60 * 60 * 24 * 7 });
  return {data: body }
})

