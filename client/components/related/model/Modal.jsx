import React, {useState, useEffect, useContext} from 'react';
import {dataUrl, related} from '../sample-data';
import css from './modal.module.css'



const Modal = ({setShowModal, productData, cardData}) => {
  let dataA, dataB, featureArr;
  console.log(productData)
    console.log(cardData)

  if (productData && cardData) {

    dataA = productData.features.map((each) => {
      return `${each.value || ''} ${each.feature || ''}`
    });

    dataB= cardData.features.map((each) => {
      return `${each.value || ''} ${each.feature || ''}`
    });

     featureArr = [...dataA, ...dataB];
    console.log(featureArr)
    featureArr = new Set(featureArr);

  }
  console.log(featureArr)
console.log(Array.from(featureArr))

  return (
    <div >
      { productData ? (
        <div className={css.modalBox}>
          <div className={css.modalContainer}>
          <button onClick={() => setShowModal(prev => !prev)}className={css.closeModalBtn}>X</button>

          <div>
            <h3>Comparing</h3>
            <table>
              <tr>
                <th>{productData.name}</th>
                <th></th>
                <th>{cardData.name}</th>
              </tr>
              {Array.from(featureArr).map((item, key) => (
                <>
                <tr>
                <td>{dataA.includes(item)}</td>
                  <td>{item}</td>
                  <td>{dataB.includes(item)}</td>
                </tr>
                </>
              ))}

            </table>

          </div>
          </div>
          </div>
          ): null}

    </div>
  )

}



export default Modal;


