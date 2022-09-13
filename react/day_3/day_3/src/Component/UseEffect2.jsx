import React, { useState, useEffect } from "react";

export default function UseEffect2() {
  const [date, setDate] = useState(new Date());
  console.log(new Date());
  function tick() {
    console.log("tick");
    setDate(new Date());
  }
  useEffect(() => {
    // console.log
    let interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return <h1>{date.toLocaleTimeString()}</h1>;
}
