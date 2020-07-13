import React, {useState, useEffect} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Budget from './Components/Budget/Budget';
import routes from './routes';
import axios from 'axios';
import './Styles/style.scss';

// import {HashRouter as Router, Route} from 'react-router-dom';

function App() {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = () => {
    axios.get('/ping')
      .then(res => {console.log(res.data)})
      .catch(console.log('failed'))
  }

  return (
    <div className="App">
      <Dashboard/>
      {routes}
    </div>
  );
}

export default App;
