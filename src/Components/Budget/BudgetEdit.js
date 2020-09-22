import React, {useState, useEffect} from 'react';

import Header from '../Header/Header';
// import EditListItem from './BudgetListEdit'

const BudgetEdit = (props) => {
  return (<div id='obligatory-div'>
    <Header title="EDIT"/>
    <div id='everything-but-the-header'>
    <div id='top-stuff'>
        <div className='white-bar'>
          <span>ALLOCATED</span>
          <span id='middle'>NAME</span>
          <span id='right'>BALANCE</span>
        </div>
        <div className='list'>
          {/* {list} */}
        </div>
      </div>
    </div>
  </div>)
}
export default BudgetEdit;
