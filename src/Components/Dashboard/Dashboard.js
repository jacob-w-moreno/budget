import React from 'react';

const Dashboard = (props) => {
  return(
    <div id='dashboard'>
      <div className='dashboard-totals'>
        <span className='dashboard-total'>$ 80</span>
        <div className='dashboard-line'/>
        <span className='dashboard-total'>$ 80</span>
      </div>
      <div id='circle'>$200</div>
      <div className='dashboard-totals'>
        <span className='dashboard-total'>$ 80</span>
        <div className='dashboard-line'/>
        <span className='dashboard-total'>% 100</span>
      </div>
    </div>
  )
}

export default Dashboard;