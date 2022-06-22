import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container flex">
          <h1>React App</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contacts</a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
