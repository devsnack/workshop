import * as React from "react";
import "../../box-styles.css";

// EX1
// 🐨 add a className prop to each div and apply the correct class names
// based on the text content

// EX2
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// EX3
// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className="">small lightblue box</div>;
const mediumBox = <div>medium pink box</div>;
const largeBox = <div>large orange box</div>;

function Ex5() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  );
}

export default Ex5;
