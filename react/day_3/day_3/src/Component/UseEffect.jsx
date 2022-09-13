import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UseEffect() {
  const [pokemonData, setPokemonData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) => {
      console.log(response);
      setPokemonData(response.data.forms[0].name);
    });
  }, [count]);
  useEffect(() => {
    console.log("hello");
  }, []);
  useEffect(() => {
    window.addEventListener("mouseover", () => {
      console.log("I got hovered");
    });
    return () => window.removeEventListener("mouseover");
  }, [count]);
  return (
    <>
      <h1>{pokemonData.length > 0 ? pokemonData : "No data fetched"}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>{count}</h2>
      <button onMouseDown={() => setCount(count + 1)}>Hover Me</button>
    </>
  );
}
