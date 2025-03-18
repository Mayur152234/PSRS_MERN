// import React, { useState } from 'react'
// import { todos } from '../data'
// function Todo() {
//     console.log(todos);
//   return (
//     <div>
//       <h2>todo create</h2>
//       <div>
//         <input type='text' placeholder='enter your todo or task' />
//         <button>add / update</button>
//       </div>
//       <hr />
//       {todos.map((e) => {
//         return (
//           <div key={e.id}>
//             <h1>{e.task}</h1>
//           </div>
//         )
//       })}
//     </div>
//   )
// }
// export default Todo
//////////////////////////////////////

// import React, { useState } from 'react'
// // import { todos } from '../data'
//  const todos = [
//    { id: 1, task: 'Buy groceries' },
//    { id: 2, task: 'Walk the dog' },
//    { id: 3, task: 'Finish project report' },
//    { id: 4, task: 'Call mom' },
//    { id: 5, task: 'Clean the house' },
//    { id: 6, task: 'Pay bills' },
//    { id: 7, task: 'Read a book' },
//    { id: 8, task: 'Exercise' },
//    { id: 9, task: 'Cook dinner' },
//    { id: 10, task: 'Write blog post' },
//  ]
// function Todo() {
//     const [tasks,setTasks] = useState(todos)

//     const deleteAll = () => setTasks([])
//     // const deleteTask = (azad) => console.log(azad);
//     const deleteTask = (azad) => {
//         setTasks(tasks.filter(function (element) {
//             // console.log(element.id !== azad)
//             return element.id !== azad
//         } ))
//     }
//   return (
//     <div>
//       <h2>todo create</h2>
//       <div>
//         <input type='text' placeholder='enter your todo or task' />
//         <button>add / update</button>
//         <br />
//         <button onClick={deleteAll}>delete all</button>

//       </div>
//       <hr />
//       {tasks.map((e,index) => {
//         return (
//           <div key={e.id}>
//             <h1>{e.task}</h1>
//             <button onClick={() => deleteTask(e.id)}>delete</button>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Todo
////////////////////////////
import React, { useState } from 'react';

const todos = [
  { id: 1, task: 'Buy groceries' },
  { id: 2, task: 'Walk the dog' },
  { id: 3, task: 'Finish project report' },
  { id: 4, task: 'Call mom' },
  { id: 5, task: 'Clean the house' },
  { id: 6, task: 'Pay bills' },
  { id: 7, task: 'Read a book' },
  { id: 8, task: 'Exercise' },
  { id: 9, task: 'Cook dinner' },
  { id: 10, task: 'Write blog post' },
];

function Todo() {
  const [tasks, setTasks] = useState(todos);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);

  const deleteAll = () => setTasks([]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = () => {
    if (task.trim() === '') return;
    if (editId) {
      setTasks(
        tasks.map((item) => (item.id === editId ? { ...item, task } : item))
      );
      setEditId(null);
    } else {
      setTasks([{ id: Date.now(), task }, ...tasks]);
    }
    setTask('');
  };

  const editTask = (id, text) => {
    setTask(text);
    setEditId(id);
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Todo List</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your todo or task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="p-2 border rounded"
        />
        <button onClick={addTask} className="ml-2 px-4 py-2 bg-blue-500 rounded">
          {editId ? 'Update' : 'Add'}
        </button>
      </div>
      <button onClick={deleteAll} className="px-4 py-2 bg-red-500 rounded">Delete All</button>
      <hr className="my-4" />
      <ul className="text-left">
        {tasks.map((e) => (
          <li key={e.id} className="flex justify-between items-center border-b py-2">
            <span>{e.task}</span>
            <div>
              <button onClick={() => editTask(e.id, e.task)} className="px-2 py-1 bg-green-500 rounded mr-2">Edit</button>
              <button onClick={() => deleteTask(e.id)} className="px-2 py-1 bg-red-500 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

