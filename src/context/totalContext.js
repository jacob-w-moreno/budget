import React from 'react';

const totalContext = React.createContext({
  total: 0,
  setTotal: () => {}
});

export default totalContext;
