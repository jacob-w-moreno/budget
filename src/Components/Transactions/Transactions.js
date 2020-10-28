import React from 'react';
import Header from '../Header';
import ListItem from './ListItem';
import TransactionContext from '../../context/transactionContext';

const Transactions = (props) => {
  return (<div id='obligatory-div'>
    <Header title = 'HISTORY'/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        <div className='white-bar'>
          <span>DATE</span>
          <span className='middle'>DESCRIPTION</span>
          <span className='right'>AMOUNT</span>
        </div>

      <TransactionContext.Consumer>
        {context => context.transactions && context.transactions.length > 0
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
      </TransactionContext.Consumer>
      </div>
    </div>
  </div>)
}
export default Transactions;
