import React from "react";
import { Ping } from "@uiball/loaders";

function Loader(props) {
  return <Ping size={225} speed={1} color={props.color || "orange" } />;
}

export default Loader;
