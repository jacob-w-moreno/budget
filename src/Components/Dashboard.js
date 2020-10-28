import React from 'react';
import TotalContext from '../context/totalContext';

const Dashboard = (props) => {
  return( <div id='dashboard'>
    <div className='dashboard__totals'>
      <span>$ {props.dollarTotal}</span>
      <div className='dashboard__line'/>
      <span>$ {props.dollarAllocated}</span>
    </div>
    <TotalContext.Consumer>
      {context => (
        <div className='circle'>$ {context.total}</div>
      )}
    </TotalContext.Consumer>
    {/* <div id='circle'>$200</div> */}
    <div className='dashboard__totals'>
      <span>$ {props.percentageTotal}</span>
      <div className='dashboard__line'/>
      <span>% {props.percentageAllocated}</span>
    </div>
  </div> )
}

export default Dashboard;
