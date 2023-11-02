import  { useState } from 'react';

export const TaskForm = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleInputChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskDescription.trim() !== '') {
      addTask(taskDescription);
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskDescription}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}



