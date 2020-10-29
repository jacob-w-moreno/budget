import React, { useContext } from 'react';

import Backdrop from '../UI/Backdrop';
import Aux from '../HOC/Aux';
import Context from '../../Context/Context';

const Modal = (props) => {

const context = useContext(Context);
console.log('cont:', context.categories);

  return ( <Aux>
    <Backdrop
    show={props.show}
    close={props.close}/>


    <div className='trans-modal'
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1': '0'
    }}>

      <div className='trans-modal__header'>
        <button className='trans-modal__exit'
        onClick={props.close}>
          X
        </button>
        CHOOSE A CATEGORY
      </div>

      {context.categories.map((category)=>
      <div className='trans-modal__category'
      onClick={()=>{
        props.chooseCategory(category.id);
        props.close();
        }}>
        <span>{category.name.toUpperCase()}</span>
        <span>{category.balance}</span>
      </div>
      )}
    </div>
  </Aux> )
}

export default Modal;
