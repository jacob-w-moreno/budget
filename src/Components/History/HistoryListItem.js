import React from 'react';

const HistoryListItem = (props) => {
  return(<div className='list-item'>
    <span className='list-item__display'>{props.date}</span>
    <span className='list-item__display middle'>{props.description}</span>
    <span className='list-item__display right'>$ {props.amount}</span>
  </div>)
}
export default HistoryListItem;
