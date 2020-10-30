import React from 'react';

import CurrencyInput from 'react-currency-input';

const BudgetListEdit = (props) => {


// === === === JSX START === === ===

  const nameInput = <input className='list-item__display input big'
    value={props.name}
    onChange={(e)=>{props.editName(props.id, e.target.value)}}/>

    let className;

    switch(props.type) {
      case ('!%'):
        className='priority-percentage';
        break;
      case ('$'):
        className='dollar';
        break;
      case ('O'):
        className='overflow';
        break;
      case ('%'):
        className='percentage';
        break;
      default:
        className='dollar';
    }

// === === === JSX END === === ===

  return (<div className={'list-item ' + className}>
    <CurrencyInput
    className='list-item__display input medium'
    prefix={props.type==='$'
    ? '$ '
    : '% '}
    precision={props.type==='$'
    ? 2
    : 1}
    value={props.allocated}
    onChangeEvent={(event, maskedValue, floatValue) => {
      props.editAllocation(props.id, +floatValue.toFixed(2));
    }}/>
    {nameInput}
    <div className='list-item__display small right'>
      {props.balance.toFixed(2)}
    </div>
    <div className='list-item__display small right'>
      {props.oldBalance.toFixed(2)}
    </div>
  </div>
  )
}
export default BudgetListEdit;
