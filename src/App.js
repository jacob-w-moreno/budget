import React, { useEffect } from 'react';
import routes from './routes';
import Dashboard from './Components/Dashboard';
import './Styles/style.scss';

import axios from 'axios';

import {connect} from 'react-redux';
import {setCategories} from './redux/reducer';

function App() {

  const getCategories = () => { axios
    .get('/api/categories')
    .then(response => {
      setCategories(response.data)
    })
    .catch(error => console.log(error));
  }

  useEffect(()=>{
    getCategories();
  },[])

  return (
    <div className="App">
      <Dashboard/>
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {setCategories})(App);
