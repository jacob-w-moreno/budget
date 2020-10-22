import React from 'react';


const BudgetListEdit = (props) => {

// === === === JSX START === === ===

  const balanceInput = <input className='edit__input'
    type='number'
    value={props.allocated}
    onChange={(e)=>{props.editAllocation(props.index, +e.target.value)}}/>

  const nameInput = <input className='list-display edit__input'
    value={props.name}
    onChange={(e)=>{props.editName(props.id, e.target.value)}}/>

// === === === JSX END === === ===

  return (<div className='dp-list-item'>
    {/* <div className='list-display'> */}
      $ {balanceInput}
    {/* </div> */}
    {/* <div className='middle list-display'> */}
      {nameInput}
    {/* </div> */}
    {/* <div className='right list-display'> */}
      {props.balance}
    {/* </div> */}
  </div>
  )
}
export default BudgetListEdit;
