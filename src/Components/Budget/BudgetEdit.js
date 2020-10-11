import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import DollarEdit from './DollarEdit'

const BudgetEdit = (props) => {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    getCategories();
  }, [])

  const getCategories = () => {
    axios.get('/categories')
    .then(res => setCategories(res.data))
    .catch(console.log('FAIL'))
  }

  return (<div id='obligatory-div'>
    <Header title="EDIT"/>
    <div id='everything-but-the-header'>
    <div id='top-stuff'>
        <div className='white-bar'>
          <span>ALLOCATED</span>
          <span id='middle'>NAME</span>
          <span id='right'>BALANCE</span>
        </div>
        <div className='list'>
          {categories.map(category => {
            return(
              <DollarEdit
                name={category.name}
                type={category.type}
                allocated={category.allocated}
                balance={category.balance}
                key={category.id}
          />
            )
          })}
        </div>
      </div>
    </div>
  </div>)
}
export default BudgetEdit;
