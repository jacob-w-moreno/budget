import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import Dashboard from '../Dashboard';
import DollarEdit from './DollarEdit';
import Header from '../Header';

const BudgetEdit = (props) => {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{setCategories(props.categories)}, [props.categories]);

// === === === FUNCTIONS START === === ===

  const editAllocation = async(index, value) => {
    const newCategories = [...categories];
    console.log(newCategories[index]);
    newCategories[index]["allocated"] = value;
    distributeDollar();
    setCategories(newCategories);
  }

  const editName = async(index, value) => {
    const newCategories = [...categories];
    newCategories[index]["name"] = value;
    setCategories(newCategories);
  }

  const distributeDollar = () => {
    let categoriesCopy = [...categories];
    let remainder = categories
      .filter(el => el.type === "$")
      .reduce((acc, curr) => acc + curr.balance, 0);

    categoriesCopy.forEach(cat => cat.balance = 0);

    for (let i = 0; i < categoriesCopy.length; i++) {
      let current = categoriesCopy[i];
      if (current.balance < current.allocated) {
        let difference = current.allocated - current.balance;
        console.log('diff:', difference);
        if (difference < remainder) {
          console.log('diff:', difference, 'rem:', remainder);
        }
      }
    }
  }

// === === === FUNCTIONS END === === ===

// === === === JSX START === === ===

  const whiteBar = <div className='white-bar'>
    <span>ALLOCATED</span>
    <span id='middle'>NAME</span>
    <span id='right'>BALANCE</span>
  </div>

  const dollars = categories.filter(el => el.type === "$").map(category => {
    return ( <DollarEdit
      name={category.name}
      editName={editName}
      type={category.type}
      allocated={category.allocated}
      editAllocation={editAllocation}
      balance={category.balance}
      index={category.id}
      key={category.id}
    /> )
  })

// === === === JSX END === === ===

  return (<div id='obligatory-div'>
      <Dashboard/>
    <Header title="EDIT"/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        {whiteBar}
        <div className='list'>
          {dollars}
          {/* {percentages} */}
        </div>
      </div>
    </div>
  </div>)
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(BudgetEdit);
