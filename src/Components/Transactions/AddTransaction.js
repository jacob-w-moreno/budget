import React, { useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CurrencyInput from 'react-currency-input';

import Header from '../Header';
import Context from '../../Context/Context';
import Modal from './CategoryModal';

const Transaction = (props) => {

  const [type, setType] = useState('+');
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [category_id, setCategory_id] = useState(0);
  const [date, setDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const context = useContext(Context);

  useEffect(()=>{
    let newDate = new Date();

    let month = newDate.getMonth()+1;
    let d8 = newDate.getDate();

    setDate(d8 + ' / ' + month);
  },[])

  // === === FUNCTIONS START === ===

  const addTransaction = () => {
    axios
      .put('/api/total', {type, amount})
      .then((res) => {
        context.setTotal(+res.data.total.toFixed(2));
        context.addTransaction(+res.data.total.toFixed(2));
      })
      .catch(error => console.log(error));
    axios
      .put('/api/category', {amount, category_id})
      .then((res) => {
        context.setCategories(res.data);
      })
      .catch(error => console.log(error));
    axios
      .post('/api/transactions', {type, amount, description, category_id, date})
      .then((res) => {
        context.setTransactions(res.data);
        props.history.push('/');
      })
      .catch(error => console.log(error));
  }

  // === === FUNCTIONS END === ===

  let toggleTypeButtons =
    <div className='trans__buttons-container'>

      <button className={type === '+' ? null : 'trans__button-not'}
      onClick={()=>setType('+')}>
        INCOME
      </button>

      <div className='button__spacer'/>

      <button className={type === '+' ? 'trans__button-not' : null}
      onClick={()=>setType('-')}>
        EXPENSE
      </button>

    </div>

  let category;

    if (type==='-') {
      category =
        <div className='trans__info'>
          <span>CATEGORY</span>
          <div className='trans__category'
          onClick={()=>setShowModal(true)}>
            {context.categories[category_id].name.toUpperCase()}
            <div>$ {context.categories[category_id].balance}</div>
          </div>
      </div>
    }

  return (<div id='obligatory-div'>


    <Header title='TRANSACTION'/>
    <Modal
    show={showModal}
    close={()=>setShowModal(false)}
    chooseCategory={setCategory_id}>
      HELLO
    </Modal>

    <div id='everything-but-the-header'>
      <div id='top-stuff'>

        {toggleTypeButtons}

        <div id='trans-info-container'>
          <div className='trans__info'>
            <span>AMOUNT</span>
            <CurrencyInput
            prefix='$ '
            precision={2}
            value={amount}
            onChangeEvent={(event, maskedValue, floatValue) => {
              setAmount(+floatValue);
            }}/>
            {/* $<input
            className='transaction-input'
            value={amount}
            type='number'
            onChange={event=>setAmount(event.target.value)}/> */}
          </div>

          <div className='trans__info'>
            <span>DESCRIPTION</span>
            <input className='trans-input'
            placeholder='Add a description'
            value={description}
            onChange={event=>setDescription(event.target.value)}
            type='text'/>
          </div>

          <div className='trans__info'>
            <span>DATE</span>
            <div>JUN. 28, 2020</div>
          </div>

          {category}

        </div>
      </div>
      <div className='button-container'>
        <button onClick={()=>addTransaction()}>ADD TRANSACTION</button>
        <Link to='/'>
          <button>CANCEL</button>
        </Link>
      </div>
    </div>

  </div>)
}
export default Transaction;
