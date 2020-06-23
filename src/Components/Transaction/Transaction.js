import React, {useState} from 'react';
import Header from '../Header/Header';

const Transaction = (props) => {

  const [income, setIncome] = useState(true);

  let category = null;
  if (!income) {
    category = (<div className='transaction-info'>
    <span>CATEGORY</span>
    <div id='transaction-category'>
      CHEESE
      <div>$89.74</div>
      </div>
  </div>);
  }

  return (
    <div id='transaction'>

      <Header
        title='TRANSACTION'/>

      <div id='trans-buttons-container'>

        <button className='trans-buttons' id={income ? null : 'trans-button-not'} onClick={()=>setIncome(true)}>INCOME</button>

        <div id='button-spacer'/>

        <button className='trans-buttons' id={income ? 'trans-button-not' : null} onClick={()=>setIncome(false)}>EXPENSE</button>

      </div>

      <div id='transaction-info-container'>

        <div className='transaction-info'>
          <span>AMOUNT</span>
          $<input className='transaction-input' placeholder='00.00' type='number'/>
        </div>

        <div className='transaction-info'>
          <span>DESCRIPTION</span>
          <input className='transaction-input' placeholder='Add a description' type='text'/>
        </div>

        <div className='transaction-info'>
          <span>DATE</span>
          <div>JUN. 28, 2020</div>
        </div>

        {category}

      </div>

      <button>ADD TRANSACTION</button>

      <button>CANCEL</button>

    </div>
  )
}
export default Transaction;