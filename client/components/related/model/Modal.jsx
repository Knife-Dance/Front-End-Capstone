import React, {useState, useEffect} from 'react';
import {dataUrl, related} from '../sample-data';
import css from './modal.module.css'



const Modal = ({showModal, setShowModal}) => {
  return (
    <div >
      {showModal ? (
        <div className={css.modalBox}>
          <div className={css.modalContainer} showModal={showModal}>Modal
          <button onClick={() => setShowModal(prev => !prev)}className={css.closeModalBtn}>X</button>

          <div>
            Model Content
          </div>
          </div>
          </div>
          ): null}





    </div>
  )

}



export default Modal;
