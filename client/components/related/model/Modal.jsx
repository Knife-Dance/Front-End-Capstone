import React, {useState, useEffect} from 'react';
import {dataUrl, related} from '../sample-data';
import css from './modal.module.css'



const Modal = ({showModal, setShowModal, productData}) => {
  return (
    <div >
      {showModal ? (
        <div className={css.modalBox}>
          <div className={css.modalContainer} showModal={showModal}>
          <button onClick={() => setShowModal(prev => !prev)}className={css.closeModalBtn}>X</button>

          <div>
            <h3>Comparing</h3>
            <table>
              <tr>
                <th>Current Product Name</th>
                <th>*</th>
                <th>Compared Product Name</th>
              </tr>
            </table>

          </div>
          </div>
          </div>
          ): null}

    </div>
  )

}



export default Modal;
