// global state store management

import { createContext, useReducer, useContext } from 'react';

const StoreContext = createContext();

// example of global state
const initialState = {
  number: 0
};

// reducernya
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': return { number: state.number + 1 };
    case 'DECREMENT': return { number: state.number - 1 };
    default: return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  const context = useContext(StoreContext);
  return context;
}