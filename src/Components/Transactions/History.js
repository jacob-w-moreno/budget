import React, { useContext } from 'react';
import Header from '../Header';
import ListItem from './ListItem';
import Context from '../../Context/Context';

const History = (props) => {

  const context = useContext(Context);

  return (<div id='obligatory-div'>
    <Header title = 'HISTORY'/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        <div className='white-bar'>
          <span>AMOUNT</span>
          <span className='middle'>DESCRIPTION</span>
          <span className='right'>DATE</span>
        </div>

      {context.transactions && context.transactions.length > 0
          ? context.transactions
            .sort((trans1, trans2) => trans2.id - trans1.id)
            .map(transaction =>
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
export default History;
