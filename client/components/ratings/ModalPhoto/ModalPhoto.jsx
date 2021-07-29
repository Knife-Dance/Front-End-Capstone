import React, { useState, useEffect } from 'react';
import styles from './ModalPhoto.module.css';

function ModalPhoto(props) {
  const buttonStyle = {
    color: 'white',
    zIndex: '201',
    position: 'absolute',
    right: '27%',
    paddingTop: '10px',
    fontSize: '30px',
    cursor: 'pointer'
  }

  return (
    <div>
      {props.showModal &&
        <>
          <div onClick={() => props.hideModal(false)}><i className="fas fa-window-close" style={buttonStyle}></i></div>
          <img className={ styles.modal } src={props.photo}/>
        </>
      }
    </div>
  );
}


export default ModalPhoto;