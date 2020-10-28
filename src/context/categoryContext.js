import React from 'react';

const categoryContext = React.createContext({
  categories: [],
  setCategories: () => {}
});

export default categoryContext;
