import { createContext, useReducer } from 'react';

export const Cartcontext = createContext();

export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.payload];
    }
  };

  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
  );
};
