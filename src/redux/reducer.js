const initialState = {
  categories: [
    // { name: 'test', type: '$', allocated: 400.93, balance: 300, id: 0 },
    // { name: 'test 2', type: '$', allocated: 100, balance: 250, id: 1 },
    // { name: 'test 3', type: '$', allocated: 200, balance: 200, id: 2 }
  ],
  history: [],
  total: 0
}

const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_HISTORY = 'GET_HISTORY';
const GET_TOTAL = 'GET_TOTAL';

export function setCategories(categoriesObject) {
  console.log('running');
  return{
    type: GET_CATEGORIES,
    payload: categoriesObject
  }
}

export function getHistory(historyObject) {
  return{
    type: GET_HISTORY,
    payload: historyObject
  }
}

export function getTotal(total) {
  return{
    type: GET_TOTAL,
    payload: total
  }
}

export default function reducer(state = initialState, action){
  const{type, payload} = action;
  console.log('action:', action);
  switch(type){
    case GET_CATEGORIES: return {...state, categories: payload};
    case GET_HISTORY: return {...state, history: payload};
    case GET_TOTAL: return {...state, total: payload};
    default: return state;
  }
}
