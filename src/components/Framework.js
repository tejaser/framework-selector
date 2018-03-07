import React from "react";

const Framework = props => (
  <div>
    {props.value && <p>Value: {props.value} </p>}
    {props.name && <p>Name: {props.name}</p>}
    {props.tech && <p>Tech: {props.tech}</p>}
    {props.isFramework && (
      <p>Is it a Framework? {props.isFramework ? "Yes" : "You wish"} </p>
    )}
  </div>
);

export default Framework;
