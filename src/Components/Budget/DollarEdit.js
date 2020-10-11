import React from 'react';


const BudgetListEdit = (props) => {

// === === === JSX START === === ===

  const balanceInput = <input type='number' value={props.allocated} onChange={(e)=>{props.editAllocation(props.index, +e.target.value)}}/>
  const nameInput = <input value={props.name} onChange={(e)=>{props.editName(props.index, e.target.value)}}/>

// === === === JSX END === === ===

  return (<div className='dp-list-item'>
    $ {balanceInput}
    {nameInput}
    {props.balance}
  </div>
  )
}
export default BudgetListEdit;
