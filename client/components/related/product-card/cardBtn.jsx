import React, {useState, useEffect} from 'react';
import {dataUrl, related} from '../sample-data';
import css from './card.module.css'
import Modal from '../model/Modal.jsx'

const CardBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  const hideModal = () => {
    setShowModal(prev => !prev);
  }
  return (
    <div>
      <button onClick={openModal}>Fav</button>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </div>
  )
}

export default CardBtn;