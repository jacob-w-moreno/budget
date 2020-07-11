import React from 'react';
import Budget from './Components/Budget/Budget';
import History from './Components/History/History';
import Transaction from './Components/Transaction/Transaction';
import {Switch, Route} from 'react-router-dom';

export default (
  <Switch>
    <Route path = '/' component = {Budget}/>
    <Route path = '/history' component = {History}/>
    <Route path = '/transaction' component = {Transaction}/>
  </Switch>
)
