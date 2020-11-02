import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Context from '../../Context/Context';

import EditItem from '../Budget/EditItem';
import Header from '../Header';
import Modal from './EditBudgetModal';

const BudgetEdit = (props) => {

  const context = useContext(Context);

  const [showModal, setShowModal] = useState(false);

  console.log('cat:', context.categories);
  console.log('tempCat:', context.tempCat);

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
    {context.categories
    .map((category, index) =>{
      context.tempCat && context.tempCat.length !== 0
      ? console.log('balance:', context.tempCat[index].balance)
      : console.log('no');
      return (<EditItem
      name={category.name}
      editName={context.editName}
      type={category.type}
      allocated={category.allocated}
      editAllocation={context.editAllocation}
      balance={category.balance}
      oldBalance={context.tempCat && context.tempCat.length !== 0
        ? context.tempCat[index].balance
        : category.balance}
      id={category.id}
      key={category.id}
      index={index}/>)
})}
  </div>

// === === === JSX END === === ===

  return (<div id='obligatory-div'>
    <Header title="EDIT"
      rightClick={()=>setShowModal(showModal ? false : true)}/>
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
