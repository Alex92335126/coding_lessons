import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h3>{props.vote}</h3>
      {/* <button onClick={() => props.increment(props.index)}>+</button>
      <button onClick={() => props.decrement(props.index)}>-</button>

      <button onClick={() => props.deleteItem(props.index)}>Delete</button> */}

      <button onClick={() => props.handleClick("+", props.index)}>+</button>
      <button onClick={() => props.handleClick("-", props.index)}>-</button>

      <button onClick={() => props.handleClick("delete", props.index)}>
        Delete
      </button>
    </div>
  );
}
