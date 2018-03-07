import React from "react";

const Form = props => (
  <select id="lang" onChange={props.getData} value={props.value}>
    <option value="select">Select</option>
    <option value="x70qp">ES6</option>
    <option value="kox1d">React</option>
    <option value="14xnlt">Angular</option>
  </select>
);

export default Form;
