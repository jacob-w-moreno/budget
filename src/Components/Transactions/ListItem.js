import React from 'react';

const ListItem = (props) => {

  let className;
  switch(props.type){
    case ('+'):
      className='green';
      break;
    case ('-'):
      className='red';
      break;
    default: className=null;
  }

  return(<div className={'list-item ' + className}>

    <span className='list-item__display'>
      {+props.amount.toFixed(2)}
    </span>

    <span className='list-item__display middle'>
      {props.description}
    </span>

    <span className='list-item__display right'>
      {props.date}
    </span>

  </div>)
}
export default ListItem;
