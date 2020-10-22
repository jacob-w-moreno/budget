import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import CategoryContext from '../../context/categoryContext';

import DollarEdit from './DollarEdit';
import Header from '../Header';

const BudgetEdit = (props) => {

  const [tempCat, setTempCat] = useState([]);

  const categoryContext = useContext(CategoryContext);

  useEffect(()=>{
    setTempCat(categoryContext.categories);
  },[])

// === === === FUNCTIONS START === === ===

  const editName = async(id, value) => {
    const categoryIndex = tempCat.findIndex(category => {
      return category.id === id
    })

    const category = {
      ...tempCat[categoryIndex]
    };
    category.name = value;

    const newCategories = [...tempCat];
    newCategories[id] = category;
    setTempCat(newCategories);
  }

  const saveOld = async() => {
    await categoryContext.setCategories(tempCat)
    props.history.push('/');
  }

// === === === FUNCTIONS START === === ===

// === === === JSX START === === ===

  const whiteBar = <div className='white-bar'>
    <span>ALLOCATED</span>
    <span id='middle'>NAME</span>
    <span id='right'>BALANCE</span>
  </div>

  const dollars = tempCat
    // .filter(category => category.type === "$")
    .map(category => <DollarEdit
        name={category.name}
        editName={editName}
        type={category.type}
        allocated={category.allocated}
        // editAllocation={context.editAllocation}
        balance={category.balance}
        id={category.id}
        key={category.id}
      />
    )

// === === === JSX END === === ===

  return (<div id='obligatory-div'>
    <Header title="EDIT"/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        {whiteBar}
        <div className='list'>
          {dollars}
          {/* {percentages} */}
        </div>
      </div>
      <div className='button-container'>
        <button onClick={async()=>{saveOld()}}>SAVE</button>
      <Link to='/'>
        <button>CANCEL</button>
      </Link>
      </div>
    </div>
  </div>)
}

export default BudgetEdit;
