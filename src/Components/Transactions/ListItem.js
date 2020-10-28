import React from 'react';

const ListItem = (props) => {

  let className;
  switch(props.type){
    case ('+'):
      className='income';
      break;
    case ('-'):
      className='expense';
      break;
    default: className=null;
  }

  return(<div className={'list-item ' + className}>

    <span className='list-item__display'>
      {props.date}
    </span>

    <span className='list-item__display middle'>
      {props.description}
    </span>

    <span className='list-item__display right'>
      {+props.amount.toFixed(2)}
    </span>

  </div>)
}
export default ListItem;
