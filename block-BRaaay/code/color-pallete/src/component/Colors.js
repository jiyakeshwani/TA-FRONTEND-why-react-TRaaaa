import React from "react";
import colors from "../color";

function Colors(props) {
  let code = Object.keys(colors);
  console.log(code);
  return (
    <>
      {code.map((key) => {
          
        <>

          <Color key={key} title={key} data={colors[key]} />
        </>;
      })}
    </>
  );
}

function Color(props) {
  return (
    <>
      <div className="flex">
        <div>
          <h1>{props.title}</h1>
          <h2>Colors.{props.title}</h2>
        </div>
        <div className="parent-box">
          {props.data.map((hexcode, i) => {
            return (
              <>
                <div className="color-box">
                  <div className="color"></div>
                  <div className="flex">
                    <span>{i === 0 ? 50 : i * 100}</span>
                    <span>{hexcode}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Colors;
