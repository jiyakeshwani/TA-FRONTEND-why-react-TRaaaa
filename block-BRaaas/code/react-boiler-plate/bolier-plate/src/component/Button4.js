let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

import React from "react";

function handleClick(id) {
  alert(`${fruits.id}`);
}

function Button4(props) {
  return (
    <>
      {fruits.map((fruit) => {
        console.log(fruit);
        return (
          <>
            <button key={props.id} onClick={handleClick(props.id)}>
              {props.value}
            </button>
          </>
        );
      })}
    </>
  );
}

export default Button4;
