import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import Context from '../../Context/Context';
import axios from 'axios';

import EditItem from './EditItem';
import Header from '../Header';

const BudgetEdit = (props) => {

  const [tempCat, setTempCat] = useState([]);

  const context = useContext(Context);

  useEffect(()=>{
    setTempCat(context.categories);
  },[context.categories])

// === === === FUNCTIONS START === === ===

  // === === AXIOS START === ===

    const saveEdits = () => { axios
      .put('/api/categories', {tempCat})
      .then(response => {
        context.setCategories(response.data);
        props.history.push('/');
      })
      .catch(error => console.log(error));
    }

  // === === AXIOS END === ===

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
      newCategory.balance = +(newCategory.allocated * .01 * context.total).toFixed(2);
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

    fixRoundingErrors(newCategories, newTotal);
  }

  const fixRoundingErrors = (newCategories, newTotal) => {
    let fullPercent = newCategories
    .filter(category => category.type === '%' || category.type === 'O')
    .reduce((sum, current) => sum += current.allocated, 0);

    let sum = newCategories
    .reduce((sum, current) => sum += current.balance, 0);
    sum = sum.toFixed(2);

    if (fullPercent === 100 && sum !== context.total) {
      let difference = +(sum - context.total).toFixed(2);
      console.log(`Sum: ${sum}. Total: ${context.total}. Off by ${difference}`);
      const index = newCategories.length - 1;

      if (difference < 0) newCategories[index].balance -= difference;
      if (difference > 0) newCategories[index].balance += difference;
    }

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

// === === === FUNCTIONS START === === ===

// === === === JSX START === === ===

  const whiteBar = <div className='white-bar'>
    <span>ALLOCATED</span>
    <span id='middle'>NAME</span>
    <span id='right'>BALANCE</span>
  </div>

  const categoriesDisplay = tempCat
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
        <button onClick={()=>{saveEdits()}}>SAVE</button>
      <Link to='/'>
        <button>CANCEL</button>
      </Link>
      </div>
    </div>
  </div>)
}

export default BudgetEdit;
