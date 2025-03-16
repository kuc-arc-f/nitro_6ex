import { setCookie } from 'h3';
import LibConfig from '../../../src/lib/LibConfig';
import bcrypt from "bcryptjs";
import {db} from '../../../src/index';
import {users} from '../../../src/db/schema';
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
console.log(body);
  if (!body.email) {
    event.node.res.statusCode = 400;
    return 'Bad Request';
  }
  if (!body.password) {
    event.node.res.statusCode = 400;
    return 'Bad Request';
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds);
  console.log("hashedPassword=", hashedPassword);
  const retUser = await db.insert(users).values({
    email: body.email , password: hashedPassword
  }).returning();

/*
  const email = import.meta.env.VITE_USER_NAME;
  const password = import.meta.env.VITE_USER_PASSWORD;
  console.log("email=", email);
  if(!(body.email === email && body.password === password)) {
    console.error('Error, Bad Request');
    event.node.res.statusCode = 400;
    return 'Bad Request';
  }
  setCookie(event, LibConfig.COOKIE_AUTH_KEY, email, { maxAge: 60 * 60 * 24 * 7 });
*/
  return {data: body }
})

