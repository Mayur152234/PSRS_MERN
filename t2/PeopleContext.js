import React, { createContext } from 'react';
import { people } from '../t1/People';

export const PeopleContext = createContext();

export function PeopleProvider({ children }) {
  return (
    <PeopleContext.Provider value={people}>
      {children}
    </PeopleContext.Provider>
  );
}
