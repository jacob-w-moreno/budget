import React, {useState} from 'react';
import Header from './Header';

const Transaction = (props) => {

  const [income, setIncome] = useState(true);

  let category = null;
  if (!income) {
    category = (<div className='trans-info'>
    <span>CATEGORY</span>
    <div id='trans-category'>
      CHEESE
      <div>$89.74</div>
      </div>
  </div>);
  }

  return (<div id='obligatory-div'>
    <Header title='TRANSACTION'/>

    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        <div id='trans-buttons-container'>
          <button id={income ? null : 'trans-button-not'} onClick={()=>setIncome(true)}>INCOME</button>
          <div id='button-spacer'/>
          <button id={income ? 'trans-button-not' : null} onClick={()=>setIncome(false)}>EXPENSE</button>
        </div>

        <div id='trans-info-container'>
          <div className='trans-info'>
            <span>AMOUNT</span>
            $<input className='transaction-input' placeholder='00.00' type='number'/>
          </div>

          <div className='trans-info'>
            <span>DESCRIPTION</span>
            <input className='trans-input' placeholder='Add a description' type='text'/>
          </div>

          <div className='trans-info'>
            <span>DATE</span>
            <div>JUN. 28, 2020</div>
          </div>

          {category}

        </div>
        <div className='button-container'>
          <button>ADD TRANSACTION</button>
        </div>
      </div>
      <div className='button-container'>
        <button>CANCEL</button>
      </div>
    </div>

  </div>)
}
export default Transaction;
