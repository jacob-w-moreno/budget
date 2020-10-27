import React from 'react';
import TotalContext from '../context/totalContext';

const Dashboard = (props) => {
  return( <div id='dashboard'>
    <div className='dashboard-totals'>
      <span className='dashboard-total'>$ {props.dollarTotal}</span>
      <div className='dashboard-line'/>
      <span className='dashboard-total'>$ {props.dollarAllocated}</span>
    </div>
    <TotalContext.Consumer>
      {context => (
        <div id='circle'>$ {context.total}</div>
      )}
    </TotalContext.Consumer>
    {/* <div id='circle'>$200</div> */}
    <div className='dashboard-totals'>
      <span className='dashboard-total'>$ {props.percentageTotal}</span>
      <div className='dashboard-line'/>
      <span className='dashboard-total'>% {props.percentageAllocated}</span>
    </div>
  </div> )
}

export default Dashboard;
