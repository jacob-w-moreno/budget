import React, { useContext } from 'react';
import Context from '../Context/Context';

const Dashboard = (props) => {

  const context = useContext(Context);

  return( <div id='dashboard'>

    <div className='dashboard__totals'>
      <span>$ {props.dollarTotal.toFixed(2)}</span>
      <div className='dashboard__line'/>
      <span>$ {props.dollarAllocated.toFixed(2)}</span>
    </div>

    <div className='circle'>{context.total.toFixed(2)}</div>

    <div className='dashboard__totals'>
      <span>$ {props.percentageTotal.toFixed(2)}</span>
      <div className='dashboard__line'/>
      <span className={props.percentageAllocated === 100 ? null : 'red'}>% {props.percentageAllocated}</span>
    </div>

  </div> )
}

export default Dashboard;
