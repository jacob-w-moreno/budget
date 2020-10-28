import React, { useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header from '../Header';
import Context from '../../context/Context';

const Transaction = (props) => {

  const [type, setType] = useState('+');
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [category_id, setCategory_id] = useState(0);
  const [date, setDate] = useState('');

  const context = useContext(Context);

  useEffect(()=>{
    let newDate = new Date();

    let year = newDate.getFullYear();
    let month = newDate.getMonth()+1;
    let d8 = newDate.getDate();

    setDate(d8+'/'+month+'/'+year);
  },[])

  // === === FUNCTIONS START === ===

  const addTransaction = () => { axios
    .post('/api/transactions', {type, amount, description, category_id, date})
    .then((res) => {
      context.setTransactions(res.data);
      props.history.push('/');
    })
    .catch(error => console.log(error));
  }

  // === === FUNCTIONS START === ===

  let toggleType =
    <div id='trans-buttons-container'>
      <button id={type === '+' ? null : 'trans-button-not'} onClick={()=>setType('+')}>INCOME</button>
      <div id='button-spacer'/>
      <button id={type === '+' ? 'trans-button-not' : null} onClick={()=>setType('-')}>EXPENSE</button>
    </div>

  let category;
    if (type==='-') {
      category =
        <div className='trans-info'>
          <span>CATEGORY</span>
          <div id='trans-category'>
            CHEESE
            <div>$89.74</div>
          </div>
      </div>
    }

  return (<div id='obligatory-div'>
    <Header title='TRANSACTION'/>

    <div id='everything-but-the-header'>
      <div id='top-stuff'>

        {toggleType}

        <div id='trans-info-container'>
          <div className='trans-info'>
            <span>AMOUNT</span>
            $<input
            className='transaction-input'
            value={amount}
            type='number'
            onChange={event=>setAmount(event.target.value)}/>
          </div>

          <div className='trans-info'>
            <span>DESCRIPTION</span>
            <input className='trans-input'
            placeholder='Add a description'
            value={description}
            onChange={event=>setDescription(event.target.value)}
            type='text'/>
          </div>

          <div className='trans-info'>
            <span>DATE</span>
            <div>JUN. 28, 2020</div>
          </div>

          {category}

        </div>
        <div className='button-container'>
          <button onClick={()=>addTransaction()}>ADD TRANSACTION</button>
        </div>
      </div>
      <div className='button-container'>
        <Link to='/'>
          <button>CANCEL</button>
        </Link>
      </div>
    </div>

  </div>)
}
export default Transaction;
