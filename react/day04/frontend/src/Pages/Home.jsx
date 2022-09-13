import React from "react";

export default function Home() {
  let word = localStorage.getItem("hello")
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my home page!</p>
      {word}
    </div>
  );
}
