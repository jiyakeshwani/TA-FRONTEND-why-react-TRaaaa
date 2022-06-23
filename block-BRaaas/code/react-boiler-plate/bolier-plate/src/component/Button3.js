import React from "react";

function handleClick(name) {
  alert(`hello ${name}`);
}

function Button3(props) {
  return (
    <>
      <button onClick={handleClick(props.name)}>arya</button>
      <button onClick={handleClick(props.name)}>john</button>
      <button onClick={handleClick(props.name)}>bran</button>
    </>
  );
}

export default Button3;
