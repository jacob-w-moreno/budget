import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import Context from '../../Context/Context';

import EditItem from './EditItem';
import Header from '../Header';

const BudgetEdit = (props) => {

  const [tempCat, setTempCat] = useState([]);

  const context = useContext(Context);

  useEffect(()=>{
    setTempCat(context.categories);
  },[context.categories])

// === === === FUNCTIONS START === === ===

  const editAllocation = async(id, value) => {
    const index = tempCat.findIndex(category => category.id === id);

    const newCategory = {...tempCat[index]};
    newCategory.allocated = value;

    const newCategories = [...tempCat];
    newCategories[index] = newCategory;

    distributePriorityPercentage(newCategories);
  }

  const distributePriorityPercentage = (newCategories) => {
    let newTotal = context.total;

    newCategories
    .filter(category => category.type ==='!%')
    .forEach(category => {
      const newCategory = {...category};
      const index = newCategories.findIndex(category => newCategory.id === category.id);
      newCategory.balance = (newCategory.allocated * .01 * context.total);
      newCategories[index] = newCategory;
      newTotal = +(newTotal - newCategory.balance).toFixed(2);
    })

    distributeDollar(newCategories, newTotal);
  }

  const distributeDollar = (newCategories, newTotal) => {
    newCategories
    .filter(category => category.type === '$')
    .forEach(category => {
      const newCategory = {...category};
      const index = newCategories.findIndex(category => newCategory.id === category.id);
      newCategory.balance = 0;
      let difference = newCategory.allocated - newCategory.balance;
      if (difference < newTotal) {
        newCategory.balance = newCategory.allocated;
        newTotal -= difference;
        console.log(`${newTotal} remaining`)
      }
      else {
        newCategory.balance += newTotal;
        newTotal = 0;
      }

      newCategories[index] = newCategory;
    })
    // setTempCat(newCategories);
    distributePercent(newCategories, newTotal);
  }

  const distributePercent = (newCategories, newTotal) => {
    newCategories
    .filter(category => category.type === '%' || category.type === 'O')
    .forEach(category => {
      const newCategory = {...category};
      const index = newCategories.findIndex(category => newCategory.id === category.id);
      newCategory.balance = +(newCategory.allocated * 0.01 * newTotal).toFixed(2);
      newCategories[index] = newCategory;
    });
    let sum = newCategories
    .filter(category => category.type === '%' || category.type === 'O')
    .reduce((sum, current) => sum += current.balance, 0);
    console.log(ole.log())

    setTempCat(newCategories);
  }

  const editName = async(id, value) => {
    const index = tempCat.findIndex(category => {
      return category.id === id
    })

    const category = {
      ...tempCat[index]
    };
    category.name = value;

    const newCategories = [...tempCat];
    newCategories[id] = category;
    setTempCat(newCategories);
  }

  const saveOld = async() => {
    await context.setCategories(tempCat)
    props.history.push('/');
  }

// === === === FUNCTIONS START === === ===

// === === === JSX START === === ===

  const whiteBar = <div className='white-bar'>
    <span>ALLOCATED</span>
    <span id='middle'>NAME</span>
    <span id='right'>BALANCE</span>
  </div>

  const categoriesDisplay = tempCat
    // .filter(category => category.type === "$")
    .map((category, index) => <EditItem
        name={category.name}
        editName={editName}
        type={category.type}
        allocated={category.allocated}
        editAllocation={editAllocation}
        balance={category.balance}
        id={category.id}
        key={category.id}
        index={index}
      />
    )

// === === === JSX END === === ===

  return (<div id='obligatory-div'>
    <Header title="EDIT"/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        {whiteBar}
        <div className='list'>
          {categoriesDisplay}
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
