import React from 'react';
import Budget from './Components/Budget/Budget';
import History from './Components/History/History';
import Transaction from './Components/Transaction';
import BudgetEdit from './Components/Budget/BudgetEdit';
import {Switch, Route} from 'react-router-dom';

export default (
  <Switch>
    <Route exact path = '/' component = {Budget}/>
    <Route path = '/history' component = {History}/>
    <Route path = '/transaction' component = {Transaction}/>
    <Route path ='/edit-budget' component = {BudgetEdit}/>
  </Switch>
)
