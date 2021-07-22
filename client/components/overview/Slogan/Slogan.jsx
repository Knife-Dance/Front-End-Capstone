import React from "react";
const Slogan = (props) => (
  <div>
    <h5>{props.product.slogan}</h5>
    <p>{props.product.description}</p>
  </div>
)


export default Slogan;