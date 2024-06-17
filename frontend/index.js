import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTodo = () => {
    const todo = { id: Date.now(), text: newTodo };
    axios.post('http://localhost:5000/api/todos', todo)
      .then(response => setTodos([...todos, response.data]))
      .catch(error => console.error(error));
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2">Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="mb-2">
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white p-2 ml-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
