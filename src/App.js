import React, { useState, useEffect } from 'react';
import routes from './routes';
import Dashboard from './Components/Dashboard';
import './Styles/style.scss';

import axios from 'axios';

import {connect} from 'react-redux';
// import {setCategories} from './redux/reducer';
import CategoryContext from './context/categoryContext';

function App() {

  const [categories, setCategories] = useState([]);

  console.log('[App] categories:', categories);

  const getCategories = () => { axios
    .get('/api/categories')
    .then(response => {
      setCategories(response.data)
    })
    .catch(error => console.log(error));
  }

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

  useEffect(()=>{
    getCategories();
  },[])

  return (
    <div className="App">
      <Dashboard/>
      <CategoryContext.Provider value={{
        categories,
        editAllocation,
        editName
      }}>
        {routes}
      </CategoryContext.Provider>
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App);
