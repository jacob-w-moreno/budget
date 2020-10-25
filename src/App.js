import React, { useState, useEffect } from 'react';
import routes from './routes';
import Dashboard from './Components/Dashboard';
import './Styles/style.scss';

import axios from 'axios';

import CategoryContext from './context/categoryContext';
import TotalContext from './context/totalContext';

function App() {

  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    getCategories();
    getTotal();
  },[])

// === === TOTALS START === ===

  // === AXIOS START ===

  const getCategories = () => { axios
    .get('/api/categories')
    .then(response => {
      setCategories(response.data)
    })
    .catch(error => console.log(error));
  }

  console.log('total:', total)
  const getTotal = () => { axios
    .get('/api/total')
    .then(response => {
      setTotal(response.data.total)
    })
    .catch(error => console.log(error));
  }

  // === AXIOS END ===

  const editAllocation = async(index, value) => {
    const newCategories = [...categories];
    console.log(newCategories[index]);
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

// === === TOTALS END === ===

  return (
    <div className="App">

      <TotalContext.Provider value={{
        total,
        setTotal
      }}>
        <Dashboard/>
      </TotalContext.Provider>

      <CategoryContext.Provider value={{
        categories,
        setCategories,
        editAllocation,
        editName
      }}>
        {routes}
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
