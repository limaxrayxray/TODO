// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Layout/Header';
import TaskList from '../components/Task/TaskList';
import TaskForm from '../components/Task/TaskForm';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSaveTask = (task) => {
    axios.post('/api/tasks', task)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <TaskForm onSave={handleSaveTask} />
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
};

export default Home;
