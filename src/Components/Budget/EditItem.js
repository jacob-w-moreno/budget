import React, {useContext} from 'react';

import CurrencyInput from 'react-currency-input';

const BudgetListEdit = (props) => {


// === === === JSX START === === ===

  const nameInput = <input className='list-item__display input main'
    value={props.name}
    onChange={(e)=>{props.editName(props.id, e.target.value)}}/>

    let prefix, className;

    switch(props.type) {
      case ('!%'):
        prefix='%';
        className='priority-percentage';
        break;
      case ('$'):
        prefix='$';
        className='dollar';
        break;
      case ('O'):
        prefix='%';
        className='overflow';
        break;
      case ('%'):
        prefix='%';
        className='percentage';
        break;
      default:
        prefix='$';
        className='dollar';
    }

// === === === JSX END === === ===

  return (<div className={'list-item ' + className}>
    <CurrencyInput
    className='list-item__display input'
    prefix={props.type==='$'
    ? '$ '
    : '% '}
    precision={props.type==='$'
    ? 2
    : 0}
    // precision={2}
    value={props.allocated}
    onChangeEvent={(event, maskedValue, floatValue) => {
      props.editAllocation(props.id, +floatValue);
    }}/>
    {nameInput}
    <div className='list-item__display'>
      {props.balance.toFixed(2)}
    </div>
  </div>
  )
}
export default BudgetListEdit;
