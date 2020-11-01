import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import Context from '../../Context/Context';

import EditItem from '../Budget/EditItem';
import Header from '../Header';
import Modal from './EditBudgetModal';

const BudgetEdit = (props) => {

  const context = useContext(Context);

  const [showModal, setShowModal] = useState(true);

// === === === FUNCTIONS START === === ===

  const saveNewBalance = () => {
    context.saveNewBalance();
    props.history.push('/');
  }

  const saveOldBalance = () => {
    context.saveOldBalance();
    props.history.push('/');
  }

// === === === FUNCTIONS END === === ===

// === === === JSX START === === ===

  const whiteBar = <div className='white-bar'>
    <span className='white-bar__small'>ALLOCATED</span>
    <span className='white-bar__small big'>NAME</span>
    <span className='white-bar__small right small'>NEW</span>
    <span className='white-bar__small right small'>OLD</span>
  </div>

  const categoriesDisplay = <div className='list'>
    {context.tempCat
    .sort((a,b) => {
      if (a.type < b.type) return -1;
      if (a.type > b.type) return 1;
      return 0;
    })
    .map((category, index) =>
      <EditItem
      name={category.name}
      editName={context.editName}
      type={category.type}
      allocated={category.allocated}
      editAllocation={context.editAllocation}
      balance={category.balance}
      oldBalance={context.categories[index] ? context.categories[index].balance : 0}
      id={category.id}
      key={category.id}
      index={index}/>
    )}
  </div>

// === === === JSX END === === ===

  return (<div id='obligatory-div'>
    <Header title="EDIT"
      rightButton={()=>setShowModal(showModal ? false : true)}/>
    <Modal
    show={showModal}
    close={()=>setShowModal(false)}/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        {whiteBar}
        {categoriesDisplay}
      </div>
      <div className='edit__buttons-container'>
        <button
        className={context.percentageAllocated!==100?'transparent':null}
        disabled={context.percentageAllocated!==100}
        onClick={()=>{saveNewBalance()}}>
          SAVE NEW
        </button>
        <div className='button__spacer'/>
        <button
        className={context.percentageAllocated!==100?'transparent':null}
        disabled={context.percentageAllocated!==100}
        onClick={()=>{saveOldBalance()}}>
          SAVE OLD
        </button>
      </div>
      <Link to='/'>
        <button style={{width: '90vw'}}>CANCEL</button>
      </Link>
    </div>
  </div>)
}

export default BudgetEdit;
