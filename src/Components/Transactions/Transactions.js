import React, { useContext } from 'react';
import Header from '../Header';
import ListItem from './ListItem';
import Context from '../../context/Context';

const Transactions = (props) => {

  const context = useContext(Context);

  return (<div id='obligatory-div'>
    <Header title = 'HISTORY'/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        <div className='white-bar'>
          <span>DATE</span>
          <span className='middle'>DESCRIPTION</span>
          <span className='right'>AMOUNT</span>
        </div>

      {context.transactions && context.transactions.length > 0
          ? context.transactions.map(transaction =>
            <ListItem
              key={transaction.id}
              id={transaction.id}
              type={transaction.type}
              date={transaction.date}
              description={transaction.description}
              amount={transaction.amount}
              category_id={transaction.category_id}
            />
          )
          : null }

      </div>
    </div>
  </div>)
}
export default Transactions;
