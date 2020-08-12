import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import routes from './routes';
import './Styles/style.scss';


function App() {
  return (
    <div className="App">
      <Dashboard/>
      {routes}
    </div>
  );
}

export default App;
