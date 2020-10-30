import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Context from '../Context/Context';

import EditItem from './Budget/EditItem';
import Header from './Header';

const BudgetEdit = (props) => {

  const context = useContext(Context);

// === === === FUNCTIONS START === === ===

  const saveEdits = () => {
    context.saveEdits();
    props.history.push('/');
  }

// === === === FUNCTIONS END === === ===

// === === === JSX START === === ===

  const whiteBar = <div className='white-bar'>
    <span>ALLOCATED</span>
    <span className='middle'>NAME</span>
    <span className='right'>BALANCE</span>
  </div>

const categoriesDisplay = <div className='list'>
  {context.tempCat.map((category, index) =>
    <EditItem
    name={category.name}
    editName={context.editName}
    type={category.type}
    allocated={category.allocated}
    editAllocation={context.editAllocation}
    balance={category.balance}
    id={category.id}
    key={category.id}
    index={index}/>
  )}
  </div>

// === === === JSX END === === ===

  return (<div id='obligatory-div'>
    <Header title="EDIT"/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        {whiteBar}
        {categoriesDisplay}
      </div>
      <div className='button-container'>
        <button onClick={()=>{saveEdits()}}>SAVE</button>
      <Link to='/'>
        <button>CANCEL</button>
      </Link>
      </div>
    </div>
  </div>)
}

export default BudgetEdit;
