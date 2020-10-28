import React from 'react';

const transactionContext = React.createContext({
  transactions: [],
  setTransactions: () => {}
});

export default transactionContext;
