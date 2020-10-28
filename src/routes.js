import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AddTransaction from './Components/Transactions/AddTransaction';
import Budget from './Components/Budget/Budget';
import EditBudget from './Components/Budget/EditBudget';
import Transactions from './Components/Transactions/Transactions';

export default (
  <Switch>
    <Route exact path = '/' component = {Budget}/>
    <Route path = '/history' component = {Transactions}/>
    <Route path = '/transaction' component = {AddTransaction}/>
    <Route path ='/edit-budget' component = {EditBudget}/>
  </Switch>
)
