import { setCookie } from 'h3';
import LibConfig from '../../../src/lib/LibConfig';
import bcrypt from "bcryptjs";
import {db} from '../../../src/index';
import {users} from '../../../src/db/schema';
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
console.log(body);
  const singleUser = await db
  .select()
  .from(users)
  .where(eq(users.email, body.email))
  .get();
  //console.log(singleUser);
  const isMatch = await bcrypt.compare(body.password, singleUser.password);
  if(!isMatch){
    event.node.res.statusCode = 400;
    return 'Bad Request';
  }
  setCookie(
    event, LibConfig.COOKIE_AUTH_KEY, body.email, { maxAge: 60 * 60 * 24 * 7 }
  );
  return {data: body }
})

