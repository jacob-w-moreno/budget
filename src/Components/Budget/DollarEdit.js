import React, {useState} from 'react';

const BudgetListEdit = (props) => {
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

  return (<div className={classname}>
    
  </div>
  )
}
export default BudgetListEdit;
