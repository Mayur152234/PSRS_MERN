import React, { useState } from 'react';
import People from '../t1/People'
import { people } from './data';

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide People' : 'Show People'}
      </button>
      {show && <People data={people} />}
    </>
  );
}

export default App;
