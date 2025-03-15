import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Page(){

  const testProc = async function(){
    try{
      const response = await fetch(`/api/test?id=1`);
      if (!response.ok) throw new Error("error, /api/test");
      const data = await response.json();
      console.log(data);

      const postData = {id: 1, name: "name-post456"}
      const resPost = await fetch(`/api/test2`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        }
      );
      if (!resPost.ok) throw new Error("error, /api/hello");
      const dataPost = await resPost.json();
      console.log(dataPost);
    }catch(e){console.error(e)}
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Test1</h1>
      <hr />
      <a href="/about">[ About ]</a>
      <hr />
      <span>home</span>
      <hr />
      <button onClick={() => testProc()}>[ test ]</button>
    </div>
  )
}
export default Page;