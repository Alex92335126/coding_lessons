import React, { useState } from "react";

export default function AddCard(props) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        value={inputValue}
      />
      <button
        onClick={() => {
          props.addItem(inputValue);
          setInputValue("");
        }}
      >
        Add Item
      </button>
    </div>
  );
}
