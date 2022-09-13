import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <p>Hi there! I am Bibek</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
      <button
        onClick={() => {
          navigate(1);
        }}
      >
        Go Forward
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
}
