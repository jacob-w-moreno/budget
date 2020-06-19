import React, {useState} from 'react';

const BudgetList = (props) => {

  return (

    <div className='list-item' id={props.id===0 ? 'no-border' : null}>

      <span className='list-number-left' onClick={()=>props.penniesFN(props.pennies ? false : true)}>
        {props.pennies ? 
          '$' + props.allocated.toFixed(2) 
        : '$' + props.allocated.toFixed(0)
        }
      </span>

      <span className='name'>{props.name}</span>

      <span className='list-number-right' onClick={()=>props.penniesFN(props.pennies ? false : true)}>
        {props.pennies ?
          '$' + props.balance.toFixed(2)
        : '$' + props.balance.toFixed(0)
        }
      </span>

    </div>
  )
}

export default BudgetList;