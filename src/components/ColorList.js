import React from "react";
import ColorItem from "./ColorItem";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color} />

    // return < li key={color} style={{color:color}}>{color}</li>;
  });

  return (
    <div>
      <ol>
        <h1> Top 5 CSS colors</h1>
        {/* display the array of <li> elements here! */}
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
