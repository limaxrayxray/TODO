// components/Task/TaskList.js
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => (
  <div>
    {tasks.map(task => (
      <TaskItem key={task.id} task={task} />
    ))}
  </div>
);

export default TaskList;
