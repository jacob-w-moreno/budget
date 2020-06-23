import React, {useState} from 'react';
import Header from '../Header/Header';
import ListItem from './BudgetList';

const Budget = (props) => {

  const [showPennies, togglePennies] = useState(false);

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

export default Budget;