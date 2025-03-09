import React from 'react';
import Person from './Person';

function People({ data }) {
  return (
    <div>
      {data.map((e) => (
        <Person key={e.id} name={e.name} age={e.age} email={e.email} />
      ))}
    </div>
  );
}

export default People;
