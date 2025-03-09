import React, { useEffect, useState } from 'react';
import People from '../t1/People';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <>
      <h1>Fetched People List</h1>
      <People data={people} />
    </>
  );
}

export default App;
