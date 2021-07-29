import React, {useState, useEffect, useContext} from 'react';
import css from './outfit.module.css'





const Outfit = ({productData}) => {
//selected product, handle getStyle by Id, handle get rate by id
//just change the selecte dproduct to the new product 

  return (
    <>
    <h3>YOUR OUTFIT</h3>
    <div style={{border: '1px solid gray'}}>
      <h4>Add to Outfit</h4>
      <button><i class="fas fa-plus"></i></button>
    </div>



    </>

  )

}



export default Outfit;


