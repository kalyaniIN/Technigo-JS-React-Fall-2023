import { useState, useEffect } from 'react';
import {TaskForm} from './TaskForm';
import {TaskList} from './TaskList';

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const taskApi = 'https://week-7-backend.onrender.com/tasks';

  const fetchTasks = async () => {
    try {
      const response = await fetch(taskApi);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTasks(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (description) => {
    const newTask = { description: description };
    fetch(`${taskApi}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([...tasks, data]);
      })
      .catch((error) => {
        console.error('Error adding task:', error);
      });
  };

  const checkTask = (taskId) => {
    // Send a POST request to mark the task as checked and update the state
    // You need to send a request to `${taskApi}/${taskId}/check` and update the task's isChecked property

    fetch(`${taskApi}/${taskId}/check`, {
      method: 'POST',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        // Find the task in the state and update its isChecked property
        const updatedTasks = tasks.map((task) => {
          if (task._id === taskId) {
            return { ...task, isChecked: true };
          }
          return task;
        });

        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error('Error checking task:', error);
      });
  };
   

    // You'll need to send a request to `${taskApi}/${taskId}/check` and update the task's isChecked property
    // Ensure that you handle any errors that may occur during the network request

  

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} checkTask={checkTask} />
    </div>
  );
};
