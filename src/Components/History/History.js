import React from 'react';
import Header from '../Header/Header';
import ListItem from './HistoryListItem';

const History = (props) => {
  return (<div id='obligatory-div'>
    <Header title = 'HISTORY'/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        <div className='white-bar'>
          <span>DATE</span>
          <span id='middle'>DESCRIPTION</span>
          <span id='right'>AMOUNT</span>
        </div>
        <div className='list'>
          <ListItem
            type='inc'
            date='8/20/20'
            description='FINDERS KEEPERS'
            amount={20}/>
          <ListItem
            type='exp'
            date='6/20/20'
            description='RENT'
            amount={750}/>
          <ListItem
            type='inc'
            date='3/20/20'
            description='PAYCHECK'
            amount={950}/>
          <ListItem
            type='exp'
            date='2/20/20'
            description='CHEESE'
            amount={11}
            id={0}/>
        </div>
      </div>
    </div>
  </div>)
}
export default History;