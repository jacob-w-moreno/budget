import React, { useState, useEffect } from 'react';
import routes from './routes';
import Dashboard from './Components/Dashboard';
import './Styles/style.scss';

import axios from 'axios';

import Context from './context/Context';

function App() {

  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(()=>{
    getCategories();
    getTotal();
    getTransactions();
  },[])

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
      setCategories(response.data)
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

  // === AXIOS END ===

  const editAllocation = async(index, value) => {
    const newCategories = [...categories];
    newCategories[index]["allocated"] = value;
    // distributeDollar();
    setCategories(newCategories);
  }

  const editName = async(id, value) => {
    const categoryIndex = categories.findIndex(category => {
      return category.id === id
    })

    const category = {
      ...categories[categoryIndex]
    };
    category.name = value

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
        editAllocation,
        editName
      }}>

        <Dashboard
        dollarTotal={dollarTotal}
        dollarAllocated={dollarAllocated}
        percentageTotal={percentageTotal}
        percentageAllocated={percentageAllocated}/>

        {routes}

      </Context.Provider>

    </div>
  );
}

export default App;
