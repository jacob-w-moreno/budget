import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import routes from './routes';
import Image from './Components/ContextTest/Image';
import './Styles/style.scss';


function App() {
  return (
    <div className="App">
      <Dashboard/>
      {routes}
      {/* <Image/> */}
    </div>
  );
}

export default App;
