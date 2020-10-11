import React, {useState} from 'react';

const BudgetListEdit = (props) => {
  return (<div className='dp-list-item'>
    <input
      value={props.allocated}
      onChange={(e)=>{props.editAllocation(props.index, +e.target.value)}}/>
    {props.name}
    {props.balance}
  </div>
  )
}
export default BudgetListEdit;
