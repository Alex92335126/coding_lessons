import React from "react";

export default function Loop() {
  const instructors = [
    { name: "Sam", age: 29, nationality: "English" },
    { name: "Bibek", age: 23, nationality: "Nepalese" },
    { name: "Siddarth", age: 27, nationality: "Indian" },
  ];
  return (
    <div>
      {instructors.map((instructor) => (
        <div
          style={{
            border: "2px solid black",
            margin: "10px",
            display: "inline-block",
          }}
        >
          <h1>Name</h1>
          <h2>{instructor.name}</h2>
          <h1>Age</h1>
          <h2>{instructor.age}</h2>
          <h1>Nationality</h1>
          <h2>{instructor.nationality}</h2>
        </div>
      ))}
    </div>
  );
}
