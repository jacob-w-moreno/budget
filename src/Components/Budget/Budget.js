import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import Context from '../../Context/Context';

import Header from '../Header';
import ListItem from './ListItem';

const Budget = (props) => {

  const [showPennies, togglePennies] = useState(false);

  const context = useContext(Context);

  return(<div id='obligatory-div'>

    <Header title="BUDGET"/>

    <div id='everything-but-the-header'>

      <div id='top-stuff'>

        <div className='white-bar'>
          <span>ALLOCATED</span>
          <span className='middle'>NAME</span>
          <span className='right'>BALANCE</span>
        </div>

      {context.categories && context.categories.length > 0
          ? context.categories.map(category =>
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
          : <span className='budget__no-categories'>You don't have any categories yet... Click "EDIT" to start budgeting.</span>}

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
