import React, { useState, useEffect } from 'react';
import routes from './routes';
import Dashboard from './Components/Dashboard';
import {withRouter} from 'react-router-dom';
import './Styles/style.scss';

import axios from 'axios';

import Context from './Context/Context';

function App(props) {

  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [tempCat, setTempCat] = useState([]);

  // const context = useContext(Context);

  useEffect(()=>{
    getCategories();
    getTransactions();
    getTotal();
  },[])

  let edit = false;
  if(props.history.location.pathname === '/edit-budget') edit = true;

  const display = edit
    ? tempCat
    : categories;

  const dollarTotal = display
  .filter(category => category.type==='$')
  .reduce((total, current) => total + current['balance'],0);

  const dollarAllocated = display
  .filter(category => category.type==='$')
  .reduce((total, current) => total + current['allocated'],0);

  const percentageTotal = display
  .filter(category => category.type==='%' || category.type==='O')
  .reduce((total, current) => total + current['balance'],0);

  const percentageAllocated = display
  .filter(category => category.type==='%' || category.type==='O')
  .reduce((total, current) => total + current['allocated'],0);

// === === FUNCTIONS START === ===

  // === AXIOS START ===

  const getCategories = () => { axios
    .get('/api/categories')
    .then(response => {
      setCategories(response.data);
      setTempCat(response.data);
    })
    .catch(error => console.log(error));
  }

  const getTotal = () => { axios
    .get('/api/total')
    .then(response => {
      setTotal(response.data.total)
    })
    .catch(error => console.log(error));
  }

  const getTransactions = () => { axios
    .get('/api/transactions')
    .then(response => {
      setTransactions(response.data)
    })
    .catch(error => console.log(error));
  }

  const saveEdits = () => { axios
    .put('/api/categories', {tempCat})
    .then(response => {
      setCategories(response.data);
    })
    .catch(error => console.log(error));
  }

  // === AXIOS END ===

  const editAllocation = async(id, value) => {
    const index = tempCat.findIndex(category => category.id === id);

    const newCategory = {...tempCat[index]};
    newCategory.allocated = value;

    const newCategories = [...tempCat];
    newCategories[index] = newCategory;

    distributePriorityPercentage(newCategories);
  }

  const distributePriorityPercentage = (newCategories) => {
    let newTotal = total;

    newCategories
    .filter(category => category.type ==='!%')
    .forEach(category => {
      const newCategory = {...category};
      const index = newCategories.findIndex(category => newCategory.id === category.id);
      newCategory.balance = +(newCategory.allocated * .01 * total).toFixed(2);
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

    if (fullPercent === 100 && sum !== total) {
      let difference = +(sum - total).toFixed(2);
      console.log(`Sum: ${sum}. Total: ${total}. Off by ${difference}`);
      const index = newCategories.length - 1;

      newCategories[index].balance = newCategories[index].balance - difference;

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

// === === FUNCTIONS END === ===

  return (
    <div className="App">

      <Context.Provider value={{
        total, setTotal,
        transactions, setTransactions,
        categories, setCategories,
        tempCat,
        editAllocation, editName,
        percentageAllocated,
        saveEdits
      }}>

        <Dashboard
        dollarTotal={dollarTotal}
        dollarAllocated={dollarAllocated}
        percentageTotal={percentageTotal}
        percentageAllocated={percentageAllocated}
        edit={edit}/>

        {routes}

      </Context.Provider>

    </div>
  );
}

export default withRouter(App);
