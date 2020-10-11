import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import ListItem from './BudgetList';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Budget = (props) => {

  const [showPennies, togglePennies] = useState(false);
  const [categories, setCategories] = useState([
    {
      name: 'test',
      type: '$',
      allocated: 400,
      balance: 300.35,
      id: 0
    },
    {
      name: 'test 2',
      type: '%',
      allocated: 100,
      balance: 200.92, id: 1
    }
  ]);

  let list = <span id='no-categories'>You don't have any categories yet... Click "EDIT" to start budgeting.</span>
  if (categories.length > 0) {
    list = categories.map(category => {
      return (
        <ListItem
          pennies={showPennies}
          penniesFN={togglePennies}
          name={category.name}
          type={category.type}
          allocated={category.allocated}
          balance={category.balance}
          key={category.id}
          />
      )
    });
  }

  return(<div id='obligatory-div'>
    <Header title="BUDGET"/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        <div className='white-bar'>
          <span>ALLOCATED</span>
          <span id='middle'>NAME</span>
          <span id='right'>BALANCE</span>
        </div>

        <div className='list'>
          {list}
        </div>
      </div>

      <div className='button-container'>
      <Link to='/edit-budget'>
        <button>EDIT</button>
      </Link>
      </div>
    </div>

  </div>)
}

export default Budget;
