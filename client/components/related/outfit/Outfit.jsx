import React, {useState, useEffect, useContext} from 'react';
import css from './outfit.module.css'
import MainContext from '../../shared/context/MainContext.js';





const Outfit = ({productData}) => {
//selected product, handle getStyle by Id, handle get rate by id
//just change the selecte dproduct to the new product

  const {setProductFeature, productFeature, handleGetStyleById } = useContext(MainContext);

  let theOverviewProduct;
  if (productFeature.length > 0 ) {
    theOverviewProduct = handleGetStyleById(productFeature.id)
    console.log(theOverviewProduct)
  }

  //have access to style then
  //onClick
  //render the info of productfeature and theOverviewProduct

  return (
    <>
    <h3>YOUR OUTFIT</h3>
    <div style={{border: '1px solid gray'}}>
      <h4>Add to Outfit</h4>
      <button className={'fas fa-plus'}></button>
    </div>



    </>

  )

}



export default Outfit;


