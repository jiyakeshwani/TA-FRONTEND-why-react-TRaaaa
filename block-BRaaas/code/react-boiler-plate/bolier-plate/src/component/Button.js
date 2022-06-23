import React from "react";

function handleClick() {
  alert("Hello React Event");
}

function Button1() {
  return (
    <>
      <button onClick={handleClick}>click me!</button>
    </>
  );
}

export default Button1;
