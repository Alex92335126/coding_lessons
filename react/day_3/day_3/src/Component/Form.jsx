import React, { useState } from "react";

export default function Form() {
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  //   function handleChange(event) {
  //     // let name = event.target.name;
  //     // let value = event.target.value;
  //     const { name, value } = event.target;
  //     if (name === "fname") {
  //       setInfo({ ...info, fname: value });
  //     } else if (name === "lname") {
  //       setInfo({ ...info, lname: value });
  //     } else {
  //       setInfo({ ...info, email: value });
  //     }
  //   }

  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((prevValue) => ({ ...prevValue, [name]: value }));
  }

  return (
    <div>
      <h1>
        {info.fname} {info.lname}
      </h1>
      <p>{info.email}</p>
      <form action="/">
        <input
          type="text"
          name="fname"
          placeholder="first name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lname"
          placeholder="last name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
