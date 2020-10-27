import React from 'react';
import Budget from './Components/Budget/Budget';
import History from './Components/History/History';
import Transaction from './Components/Transaction';
import EditBudget from './Components/Budget/EditBudget';
import {Switch, Route} from 'react-router-dom';

export default (
  <Switch>
    <Route exact path = '/' component = {Budget}/>
    <Route path = '/history' component = {History}/>
    <Route path = '/transaction' component = {Transaction}/>
    <Route path ='/edit-budget' component = {EditBudget}/>
  </Switch>
)
