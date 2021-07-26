import React, { useState } from 'react';
import parser from 'html-react-parser';

const AddToCart = (props) => {
  // console.log(props.style.skus)
  const [size, setSize] = useState(props.style.skus[Object.keys(props.style.skus)[0]]);
  // console.log(size)
  const HandleSize = (sizes) => {
    let stock = false;
    let htmlString = '';
    for (var key in sizes) {
      if (sizes[key].quantity > 0) {
        stock = true;
        htmlString += `<option value=${JSON.stringify(sizes[key])}>${sizes[key].size}</option>`;
      }
    }
    if (stock) {
      return htmlString;
    }
  }
  const HandleSizeSelect = (e) => {
    setSize(JSON.parse(e.target.value))
    console.log(size)
  }

  const HandleQuantity = (stock) => {
    // let stock =
  }
  return (
    <div>AddToCart
      <select onChange={HandleSizeSelect}>
        {parser(HandleSize(props.style.skus))}
      </select>
      <select>
        {HandleQuantity(size.quantity)}
      </select>
    </div>

  )
}

export default AddToCart;