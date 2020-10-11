import React from 'react';

const BudgetList = (props) => {

  let prefix, classname;

  if (props.type === '%!') {
    prefix = ('%');
    classname = 'p-percentage-list-item';
  } else if (props.type === 'o') {
    prefix = ('%');
    classname = 'overflow-list-item';
  } else if (props.type === '$') {
    prefix = ('$');
    classname = 'dp-list-item';
  }  else if (props.type === '%'){
    prefix = ('%');
    classname = 'dp-list-item';
  } else {
    prefix = ('?');
    classname = 'db-list-item';
  }

  return (

    <div className={classname}>

      <span className='list-display' onClick={()=>props.penniesFN(props.pennies ? false : true)}>
        {props.pennies && props.type === '$' ?
          <span>{prefix} {props.allocated.toFixed(2)} </span>
        : <span>{prefix} {props.allocated.toFixed(0)}</span>
        }
      </span>

      <span className='list-display' id='middle'>{props.name}</span>

      <span className='list-display' id='right' onClick={()=>props.penniesFN(props.pennies ? false : true)}>
        {props.pennies ?
          '$ ' + props.balance.toFixed(2)
        : '$ ' + props.balance.toFixed(0)
        }
      </span>

    </div>
  )
}

export default BudgetList;
