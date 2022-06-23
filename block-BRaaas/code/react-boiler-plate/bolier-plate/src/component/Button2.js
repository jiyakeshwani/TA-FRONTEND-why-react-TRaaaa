import React from "react";

function handleClick() {
  alert(
    "To learn React use https://reactjs.org",
    " React and ReactDOM works together",
    " Babel helps in writing JSX"
  );
}

function Button2() {
  return <button onClick={handleClick}>How can I help you?</button>;
}

export default Button2;
