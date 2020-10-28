import React from 'react';

const Context = React.createContext({
  total: 0,
  setTotal: () => {},
  categories: [],
  setCategories:() => {},
  transactions: [],
  setTransactions: () => {}
})

export default Context;
