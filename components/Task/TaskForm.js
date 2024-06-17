// components/Task/TaskForm.js
import { useState } from 'react';

const TaskForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, dueDate, priority });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full"></textarea>
      </div>
      <div>
        <label>Due Date</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border p-2 w-full">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Save</button>
    </form>
  );
};

export default TaskForm;
