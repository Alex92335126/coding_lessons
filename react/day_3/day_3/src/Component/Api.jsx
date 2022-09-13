import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Api() {
  const [people, setPeople] = useState([]);
  const [people2, setPeople2] = useState([]);
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    console.log(clicked)
    handleClick()
    if (clicked) {
      clickedBtn()
    }
  }, [clicked])

  const clickedMe = () => {
    setClicked(true)
  }
  
  //es6 arrow function async await
  const clickedBtn = async () => {
    let res = await axios.get("http://api.open-notify.org/astros.json")
    let names = res.data.people.map((item) => item.name)
    setPeople2(names)
  }

  function handleClick() {
    axios("http://api.open-notify.org/astros.json").then((response) => {
      let names = response.data.people.map((object) => object.name);
      console.log(names)
      setPeople(names);
    });
  }

  return (
    <div>
      <h1>
        use effect call
      </h1>
      {people.map((name, index) => (
        <p key={index}>{index} ===== {name}</p>
      ))}
      <h1>
        Onlick function
      </h1>
      {people2.map((name, index) => (
        <h2 key={index}>{name}</h2>
      ))}
      <button onClick={clickedBtn}>Who is in space?</button>
      <button onClick={clickedMe}>Clicked</button>
    </div>
  );
}
