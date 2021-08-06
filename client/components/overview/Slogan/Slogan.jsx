import React from "react";
import css from './Slogan.module.css';
const Slogan = (props) => (
  <div className={css.container}>
    <h5>{props.product.slogan}</h5>
    <p>{props.product.description}</p>
  </div>
)
export default Slogan;