import React, {useState} from 'react';
import Header from '../Header/Header';
import ListItem from './BudgetList';

import {connect} from 'react-redux';

const Budget = (props) => {

  console.log(props);

// Even though I use the spread operator to copy props.categories here...
  const [categories, setCategories] = useState([...props.categories]);
  const [showPennies, togglePennies] = useState(false);

  console.log(props.categories);
// ...then use the spread operator AGAIN to copy the categories here...
  let newCategories = [...categories]
// ...this line still directly modifies the original object in the reducer.
  newCategories[0]["name"]='cheese';
  console.log(props.categories);

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
          {categories.map(category => {
            return (
              <ListItem
                name={category.name}
                type={category.type}
                allocated={category.allocated}
                balance={category.balance}
                key={category.id}
                />
            )
          })}
          <ListItem
            pennies={showPennies}
            penniesFN={togglePennies}
            allocated={10}
            type='%!'
            name='SAVINGS'
            balance={400}/>
          <ListItem
            pennies={showPennies}
            penniesFN={togglePennies}
            allocated={10}
            type='%!'
            name='TITHING'
            balance={20}/>
          <ListItem
            pennies={showPennies}
            penniesFN={togglePennies}
            allocated={50}
            type='$'
            name='ENTERTAINMENT '
            balance={40}/>
          <ListItem
            pennies={showPennies}
            penniesFN={togglePennies}
            allocated={50}
            type='$'
            name='EATING OUT'
            balance={40}/>
          <ListItem
            pennies={showPennies}
            penniesFN={togglePennies}
            type='%'
            allocated={50}
            name='HOUSE'
            balance={40}/>
          <ListItem
            pennies={showPennies}
            penniesFN={togglePennies}
            allocated={50}
            type='o'
            name='OVERFLOW'
            balance={40}
            id={0}/>
        </div>
      </div>
      <div className='button-container'>
        <button>EDIT</button>
      </div>

    </div>

  </div>)
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Budget);
