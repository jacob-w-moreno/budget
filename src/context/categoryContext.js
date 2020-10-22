import React from 'react';

const categoryContext = React.createContext({
  categories: false,
  setCategories: () => {}
});

export default categoryContext;
