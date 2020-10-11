import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import Header from '../Header/Header';
import DollarEdit from './DollarEdit'

const BudgetEdit = (props) => {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{setCategories(props.categories)}, []);

  const editAllocation = async(index, value) => {
    const newCategories = [...categories];
    console.log(newCategories[index]);
    newCategories[index]["allocated"] = value;
    setCategories(newCategories);
  }

  const dollars = categories.map(category => {
    return ( <DollarEdit
      name={category.name}
      type={category.type}
      allocated={category.allocated}
      editAllocation={editAllocation}
      balance={category.balance}
      index={category.id}
      key={category.id}
    /> )
  })

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
        {dollars}
      </div>
    </div>
    </div>
  </div>)
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(BudgetEdit);
