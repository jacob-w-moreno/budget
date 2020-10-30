import React, {useContext} from 'react';
import CurrencyInput from 'react-currency-input';
// import Context from '../../Context/Context';

const BudgetListEdit = (props) => {

  // const context = useContext(Context);

// === === === JSX START === === ===

  const nameInput = <input className='list-item__display input middle main'
    value={props.name}
    onChange={(e)=>{props.editName(props.id, e.target.value)}}/>

// === === === JSX END === === ===

  return (<div className='list-item'>
    <CurrencyInput
    className='list-item__display input'
    prefix={props.type==='$'
    ? '$'
    : '%'}
    precision={props.type==='$'
    ? 2
    : 0}
    value={props.allocated}
    onChangeEvent={(event, maskedValue, floatValue) => {
      props.editAllocation(props.id, +floatValue);
    }}/>
    {nameInput}
    <div className='list-item__display right'>
      {props.balance.toFixed(2)}
    </div>
  </div>
  )
}
export default BudgetListEdit;
