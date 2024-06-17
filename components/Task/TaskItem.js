// components/Task/TaskItem.js
const TaskItem = ({ task }) => (
  <div className="border p-2 mb-2">
    <h2 className="text-lg">{task.title}</h2>
    <p>{task.description}</p>
    <p>Due: {task.dueDate}</p>
    <p>Priority: {task.priority}</p>
  </div>
);

export default TaskItem;
