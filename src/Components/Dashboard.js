import React, { useContext } from 'react';
import Context from '../Context/Context';

const Dashboard = (props) => {

  const context = useContext(Context);

  return( <div id='dashboard'>

    <div className='dashboard__totals'>
      <span>$ {props.dollarTotal}</span>
      <div className='dashboard__line'/>
      <span>$ {props.dollarAllocated}</span>
    </div>

    <div className='circle'>$ {context.total}</div>

    <div className='dashboard__totals'>
      <span>$ {props.percentageTotal}</span>
      <div className='dashboard__line'/>
      <span>% {props.percentageAllocated}</span>
    </div>

  </div> )
}

export default Dashboard;
