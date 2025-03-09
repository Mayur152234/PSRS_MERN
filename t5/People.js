import React from 'react';
import Person from '../t1/Person';

function People({ data }) {
  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data.map((e) => (
        <Person key={e.id} name={e.name} age={e.age} email={e.email} />
      ))}
    </div>
  );
}

export default People;
