import { setCookie } from 'h3';
import LibConfig from '../../../src/lib/LibConfig';
import { firebaseConfig } from '../../../src/lib/firebase';
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
const app = initializeApp(firebaseConfig);

export default defineEventHandler(async (event) => {
  //console.log(firebaseConfig);
  const retObj = { ret: 500, data: null }
  const body = await readBody(event)
console.log(body);
  const auth = getAuth();
  const user = await signInWithEmailAndPassword(auth, body.email, body.password);
  if(user.user.uid){
    console.log('ログイン成功=', user.user.uid)
    body.uid = user.user.uid;
  }else{
    console.error('Error, Bad Request');
    event.node.res.statusCode = 400;
    return 'Bad Request';
  }
  console.log(body.email);
  console.log("uid=", user.user.uid);
  setCookie(event, LibConfig.COOKIE_AUTH_KEY, body.email, { maxAge: 60 * 60 * 24 * 7 });
  return {data: body }
})

