import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import routes from './routes';
import {connect} from 'react-redux';
import './Styles/style.scss';


function App() {
  return (
    <div className="App">
      <Dashboard/>
      {routes}
    </div>
  );
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App);
