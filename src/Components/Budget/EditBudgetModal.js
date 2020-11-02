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
      balance: 0,
      id: context.categories.length
    }
    let newTempCat = [...context.categories];
    newTempCat.push(newCategory);
    console.log(newTempCat);
    context.setCategories(newTempCat);
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
    onClick={()=>{
      addCategory('!%');
      props.close();
    }}>
      PRIORITY PERCENTAGE
    </button>

    <button className='edit__add-category'
    onClick={()=>{
      addCategory('$');
      props.close();
    }}>
      DOLLAR
    </button>

    <button className='edit__add-category'
    onClick={()=>{
      addCategory('%');
      props.close();
    }}>
      PERCENTAGE
    </button>

    </div>
  </Aux>)
})

export default EditBudgetModal;
