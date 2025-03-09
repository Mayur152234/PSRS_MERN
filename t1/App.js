import React from 'react';
import People from './component/t1/People';
import { people } from './data';

function App() {
  return (
    <>
      <h1>People List</h1>
      <People data={people} />
    </>
  );
}

export default App;
