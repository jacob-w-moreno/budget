import React, {useContext} from 'react';

import Backdrop from '../UI/Backdrop';
import Aux from '../HOC/Aux';
import Context from '../../Context/Context';

const EditBudgetModal = (props => {

  const context = useContext(Context);

  const addCategory = (type) => {
    let newCategory = {
      name: 'NEW CATEGORY',
      type: type,
      allocated: 0,
      balance: 0
    }
    let newTempCat = [...context.tempCat];
    newTempCat.push(newCategory);
    context.setTempCat(newTempCat);
  }

  return (<Aux>
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

    <button className='edit__add-category'
    onClick={()=>addCategory('!%')}>
      PRIORITY PERCENTAGE
    </button>

    <button className='edit__add-category'
    onClick={()=>addCategory('$')}>
      DOLLAR
    </button>

    <button className='edit__add-category'
    onClick={()=>addCategory('%')}>
      PERCENTAGE
    </button>

    </div>
  </Aux>)
})

export default EditBudgetModal;
