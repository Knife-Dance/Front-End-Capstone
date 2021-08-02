import React, {useState, useEffect, useContext} from 'react';
import {dataUrl, related} from '../sample-data';
import css from './modal.module.css'



const Modal = ({setShowModal, productData, cardData}) => {

  let dataA, dataB, featureArr;

  if (productData && cardData) {

    dataA = productData.features.map((each) => {
      return `${each.value || ''} ${each.feature || ''}`
    });

    dataB= cardData.features.map((each) => {
      return `${each.value || ''} ${each.feature || ''}`
    });

     featureArr = [...dataA, ...dataB];

    featureArr = new Set(featureArr);

  }




  return (
    <div >
      { productData ? (
        <div className={css.modalBox}>
          <div className={css.modalContainer}>
          <button onClick={() => setShowModal(prev => !prev)}className={css.closeModalBtn}>X</button>

          <div >
            <h3>Comparing</h3>
            <div className={css.tableHeader}>
              <p >{productData.name}</p>
              <p>{cardData.name}</p>
            </div>

            <table>

              {Array.from(featureArr).map((item, key) => (
                <>
                <tr key={key}>
                <td className={css.leftCheck}>{dataA.includes(item) ? <i className={"fas fa-check"}></i> : ''}</td>

                  <td>{item}</td>
                  <td className={css.rightCheck}>{dataB.includes(item) ? <i className={"fas fa-check"}></i> : ''}</td>
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


