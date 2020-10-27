import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import CategoryContext from '../../context/categoryContext';

import Header from '../Header';
import ListItem from './ListItem';

const Budget = (props) => {

  const [showPennies, togglePennies] = useState(false);

  return(<div id='obligatory-div'>
    <Header title="BUDGET"/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        <div className='white-bar'>
          <span>ALLOCATED</span>
          <span className='middle'>NAME</span>
          <span className='right'>BALANCE</span>
        </div>

      <CategoryContext.Consumer>
        {context => context.categories && context.categories.length > 0
          ? context.categories.map(category => {
            return (
              <ListItem
                penniesFN={()=>togglePennies(showPennies ? false : true)}
                pennies={showPennies}
                name={category.name}
                type={category.type}
                allocated={category.allocated}
                balance={category.balance}
                key={category.id}
              />
            )
          })
          : <span className='budget__no-categories'>You don't have any categories yet... Click "EDIT" to start budgeting.</span>}
      </CategoryContext.Consumer>
        {/* <div className='list'>
          {list}
        </div> */}
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
