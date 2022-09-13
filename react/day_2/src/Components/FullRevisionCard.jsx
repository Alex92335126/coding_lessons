import React, { useState } from "react";
import AddCard from "./AddCard";
import Card from "./Card";

export default function FullRevisionCard() {
  const [data, setData] = useState([
    { name: "HTML", vote: 2 },
    { name: "CSS", vote: 1 },
    { name: "JavaScript", vote: 4 },
  ]);

  // function increment(index) {
  //   setData((prevValue) => {
  //     let copyData = [...prevValue];
  //     copyData[index].vote++;
  //     return copyData;
  //   });
  // }

  // function decrement(index) {
  //   setData((prevValue) => {
  //     let copyData = [...prevValue];
  //     copyData[index].vote--;
  //     return copyData;
  //   });
  // }

  // function deleteItem(index) {
  //   setData((prevValue) => {
  //     let copyData = [...prevValue];
  //     copyData.splice(index, 1);
  //     return copyData;
  //   });
  // }

  function handleClick(text, index) {
    setData((prevValue) => {
      let copyData = [...prevValue];
      // if (text === "+") {
      //   copyData[index].vote++;
      // } else if (text === "-") {
      //   copyData[index].vote--;
      // } else {
      //   copyData.splice(index, 1);
      // }
      text === "+"
        ? copyData[index].vote++
        : text === "-"
        ? copyData[index].vote--
        : copyData.splice(index, 1);

      return copyData;
    });
  }

  return (
    <div>
      {data.map((object, index) => (
        <Card
          key={index}
          index={index}
          name={object.name}
          vote={object.vote}
          // increment={(index) => increment(index)}
          // decrement={(index) => decrement(index)}
          // deleteItem={(index) => deleteItem(index)}
          handleClick={handleClick}
        />
      ))}
      <AddCard
        addItem={(inputValue) =>
          setData((prevValue) => [...prevValue, { name: inputValue, vote: 0 }])
        }
      />
    </div>
  );
}
