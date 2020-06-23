import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Budget from './Components/Budget/Budget';
import Transaction from './Components/Transaction/Transaction';
import './Styles/style.scss';

function App() {

  return (
    <div className="App">
      <Dashboard/>
      {/* <Budget/> */}
      <Transaction/>
    </div>
  );
}

export default App;
