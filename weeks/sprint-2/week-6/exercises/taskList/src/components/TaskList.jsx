import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const TaskList = ({ tasks, checkTask }) => {
   // Sort tasks based on the date property in descending order (most recent first)
   const sortedTasks = tasks.slice().sort((a, b) => b.date - a.date);
  return (
    <ul>
      {sortedTasks.map((task) => (
        <li key={task._id}>
          <label>
            <input type="checkbox" onChange={() => checkTask(task._id)} 
            checked={task.isChecked} />
            {task.description}
            <span> (Added {formatDistanceToNow(task.date, { addSuffix: true })})</span>
          </label>
        </li>
      ))}
    </ul>
  );
}


