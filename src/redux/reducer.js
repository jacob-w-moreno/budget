const initialState = {
  categories: [],
  history: ['TEST: history'],
  total: 'TEST: total'
}

// const GET_USER = 'GET_USER';
const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_HISTORY = 'GET_HISTORY';
const GET_TOTAL = 'GET_TOTAL';
// const LOGOUT = 'LOGOUT';

export function getCategories(categoriesObject) {
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
  switch(type){
    case GET_CATEGORIES: return {...state, categories: payload};
    case GET_HISTORY: return {...state, history: payload};
    case GET_TOTAL: return {...state, total: payload};
    default: return state;
  }
}
