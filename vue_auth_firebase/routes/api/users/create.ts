import { setCookie } from 'h3';
import LibConfig from '../../../src/lib/LibConfig';
import { firebaseConfig } from '../../../src/lib/firebase';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
const app = initializeApp(firebaseConfig);

export default defineEventHandler(async (event) => {
  const retObj = { ret: 500, data: null }
  const body = await readBody(event)
console.log(body);
  const auth = getAuth();
  const user = await  createUserWithEmailAndPassword(auth, body.email, body.password)
  return {data: body }
})

