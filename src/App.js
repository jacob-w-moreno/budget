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

  const dollarTotal = categories
  .filter(category => category.type==='$')
  .reduce((total, current) => total + current['balance'],0);

  const dollarAllocated = categories
  .filter(category => category.type==='$')
  .reduce((total, current) => total + current['allocated'],0);

  const percentageTotal = categories
  .filter(category => category.type==='%' || category.type==='O')
  .reduce((total, current) => total + current['balance'],0);

  const percentageAllocated = categories
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

  const saveNewBalance = () => { axios
    .put('/api/categories/new-balance', {categories})
    .then(response => {
      setCategories(response.data);
    })
    .catch(error => console.log(error));
  }

  const saveOldBalance = () => { axios
    .put('/api/categories/old-balance', {categories})
    .then(response => {
      setCategories(response.data);
    })
    .catch(error => console.log(error));
  }

  // === AXIOS END ===

  const addTransaction = async(newTotal) => {
    const newCategories = [...categories];
    distributePriorityPercentage(newCategories, newTotal);
  }

  const editAllocation = async(id, value) => {
    const index = categories.findIndex(category => category.id === id);

    const newCategory = {...categories[index]};
    newCategory.allocated = value;

    const newCategories = [...categories];
    newCategories[index] = newCategory;

    distributePriorityPercentage(newCategories, total);
  }

  const distributePriorityPercentage = (newCategories, newTotal) => {

    console.log('1 receives:', newTotal);

    newCategories
    .filter(category => category.type ==='!%')
    .forEach(category => {
      const newCategory = {...category};
      const index = newCategories.findIndex(category => newCategory.id === category.id);
      newCategory.balance = +(newCategory.allocated * .01 * total).toFixed(2);
      newCategories[index] = newCategory;
      newTotal = +(newTotal - newCategory.balance).toFixed(2);
    })

    console.log('1 gives:', newTotal);
    distributeDollar(newCategories, newTotal);
  }

  const distributeDollar = (newCategories, newTotal) => {
    console.log('2 receives:', newTotal);
    newCategories
    .filter(category => category.type === '$')
    .forEach(category => {
      const newCategory = {...category};
      const index = newCategories.findIndex(category => newCategory.id === category.id);
      newCategory.balance = 0;
      let difference = newCategory.allocated - newCategory.balance;
      if (difference < newTotal) {
        newCategory.balance = newCategory.allocated;
        newTotal = +(newTotal - difference).toFixed(2);
      }
      else {
        newCategory.balance += newTotal;
        newTotal = 0;
      }
      newCategories[index] = newCategory;
    })
    console.log('2 gives:', newTotal);
    distributePercent(newCategories, newTotal);
  }

  const distributePercent = (newCategories, newTotal) => {
    console.log('3 receives:', newTotal);
    newCategories
    .filter(category => category.type === '%' || category.type === 'O')
    .forEach(category => {
      const newCategory = {...category};
      const index = newCategories.findIndex(category => newCategory.id === category.id);
      newCategory.balance = +(newCategory.allocated * 0.01 * newTotal).toFixed(2);
      newCategories[index] = newCategory;
    });

    console.log('3 gives:', newTotal);
    fixRoundingErrors(newCategories, newTotal);
  }

  const fixRoundingErrors = (newCategories) => {
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

    setCategories(newCategories);
  }

  const editName = async(id, value) => {
    const index = categories.findIndex(category => {
      return category.id === id
    })

    const category = {
      ...categories[index]
    };
    console.log('category:', category);
    category.name = value;

    const newCategories = [...categories];
    newCategories[id] = category;
    setCategories(newCategories);
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
        saveNewBalance, saveOldBalance,
        addTransaction
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
