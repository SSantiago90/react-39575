import React from "react";

function Button(props) {
  const stylesButton = {
    backgroundColor: props.color || "purple",
    color: "white",
    padding: "4px 10px",
    borderRadius: "8px",
  };

  return (
    <button style={stylesButton} onClick={props.onTouchButton}>
      {props.children}
    </button>
  );
}

export default Button;
