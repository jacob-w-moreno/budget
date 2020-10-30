import React from 'react';

const BudgetList = (props) => {

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

  return (<div className={'list-item ' + className}>
    <span className='list-item__display'
    onClick={props.penniesFN}>
      {props.pennies && props.type === '$'
        ? <span>{prefix} {props.allocated.toFixed(2)} </span>
        : <span>{prefix} {props.allocated.toFixed(0)}</span>
      }
    </span>

    <span className='list-item__display middle main'>
      {props.name}
    </span>

    <span className='list-item__display right'
    onClick={props.penniesFN}>
      {props.pennies
        ? props.balance.toFixed(2)
        : props.balance.toFixed(0)
      }
    </span>
  </div>)
}

export default BudgetList;
