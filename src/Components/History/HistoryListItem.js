import React from 'react';

const HistoryListItem = (props) => {
  return(<div className={props.type ==='inc' ? 'history-inc-list-item' : 'history-exp-list-item'} id={props.id===0 ? 'no-border' : null}>
    <span className='list-display'>{props.date}</span>
    <span className='list-display' id='middle'>{props.description}</span>
    <span className='list-display' id='right'>$ {props.amount}</span>
  </div>)
}
export default HistoryListItem;