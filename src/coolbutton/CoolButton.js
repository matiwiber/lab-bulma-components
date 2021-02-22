import React from "react";

const CoolButton = (props) => {
  return (
    <div>
      <button className={props.className}>
        {/* {this.props.children} */}
        {props.text}
      </button>
    </div>
  );
};

export default CoolButton;
