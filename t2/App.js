import React from 'react';
import { PeopleProvider } from './PeopleContext'
import Peoples from './PeopleContext';

function App() {
  return (
    <PeopleProvider>
      <h1>People List (Using Context)</h1>
      <Peoples />
    </PeopleProvider>
  );
}

export default App;
