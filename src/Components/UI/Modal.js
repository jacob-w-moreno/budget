import React from 'react';

import Backdrop from './Backdrop';
import Aux from '../HOC/Aux';

const Modal = (props) =>
  <Aux>
    <Backdrop
    show={props.show}
    clicked={props.modalClosed}/>
    <div style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1': '0'
    }}>
      {props.children}
    </div>
  </Aux>


export default Modal;
