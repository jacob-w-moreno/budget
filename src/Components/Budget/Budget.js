import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCategories} from '../../redux/reducer';

import Header from '../Header/Header';
import ListItem from './BudgetList';

const Budget = (props) => {

  const [showPennies, togglePennies] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(props.categories)}, [props.categories])

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

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getCategories})(Budget);
