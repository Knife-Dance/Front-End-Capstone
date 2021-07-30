import React, { useState } from 'react';
import parser from 'html-react-parser';
import css from './AddToCart.module.css';
import $ from "jquery";

const AddToCart = (props) => {
  // console.log(props.style.skus)
  const [size, setSize] = useState(null);
  const [sku, setSku] = useState(null);
  const [amount, setAmount] = useState(1);
  // console.log(size)
  const handleSize = (sizes) => {
    // console.log(sizes)
    if (sizes[null]) {
      return '<option value="" disabled selected> OUT OF STOCK </option>'
    }

    let stock = false;
    let htmlString = '';
    for (var key in sizes) {
      if (sizes[key].quantity > 0) {
        stock = true;
        htmlString += `<option value=${JSON.stringify([key, sizes[key]])}>${sizes[key].size}</option>`;
      }
    }
    if (stock) {
      return htmlString;
    }
  }
  const handleSizeSelect = (e) => {
    let temp = JSON.parse(e.target.value);
    $('#size').attr('size', '1');
    setSize(temp[1].quantity)
    setSku(temp[0])
    // console.log(size)
    // console.log(sku)
  }

  const handleQuantity = (stock) => {
    // console.log(stock);
    let quantityString = '';
    if (stock > 15) {
      for (var i = 1; i <= 15; i++) {
        quantityString += `<option value=${i}>${i}</option>`;
      }
    } else {
      for (var i = 1; i <= stock; i++) {
        quantityString += `<option value=${i}>${i}</option>`;
      }
    }
    return quantityString;
  }

  const handleQuantitySelect = (e) => {
    setAmount(e.target.value);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(size)
    if (size === null) {
      alert('Please select a size.')
      $('#size').attr('size', '3');
    } else {
      console.log({ sku, amount }) // post request to API to save cart
    }
  }

  const handleButton = () => {
    if (sku) {
      return (<button>Add To Cart</button>)
    }
  }


  return (
    <form className={css.container} onSubmit={handleAdd}>
      <span>
        <select defaultValue="start" id="size" onChange={handleSizeSelect}>
          <option value="start" disabled >Select Size</option>
          {/* {console.log(props.style.skus)} */}
          {parser(handleSize(props.style.skus))}
        </select>
      </span>
      <span>
        <select onChange={handleQuantitySelect}>
          {(size ? parser(handleQuantity(size)) : <option>-</option>)}
        </select>
      </span>
      <span>
        <button>Add To Cart</button>
      </span>
    </form>

  )
}

export default AddToCart;