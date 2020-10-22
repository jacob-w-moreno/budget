import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import CategoryContext from '../../context/categoryContext';

import DollarEdit from './DollarEdit';
import Header from '../Header';

const BudgetEdit = (props) => {

// === === === JSX START === === ===

  const whiteBar = <div className='white-bar'>
    <span>ALLOCATED</span>
    <span id='middle'>NAME</span>
    <span id='right'>BALANCE</span>
  </div>

// === === === JSX END === === ===

  return (<div id='obligatory-div'>
    <Header title="EDIT"/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        {whiteBar}
        <div className='list'>
          <CategoryContext.Consumer>
            {context => context.categories
              // .filter(category => category.type === "$")
              .map(category => {
                return (<DollarEdit
                  name={category.name}
                  editName={context.editName}
                  type={category.type}
                  allocated={category.allocated}
                  editAllocation={context.editAllocation}
                  balance={category.balance}
                  id={category.id}
                  key={category.id}
                />)
              })}
          </CategoryContext.Consumer>
          {/* {percentages} */}
        </div>
      </div>
      <div className='button-container'>
        <button>SAVE</button>
      <Link to='/'>
        <button>CANCEL</button>
      </Link>
      </div>
    </div>
  </div>)
}

export default BudgetEdit;
