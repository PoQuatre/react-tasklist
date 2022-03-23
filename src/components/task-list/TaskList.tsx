import { useContext } from 'react';

import { TasksContext } from 'App';

export const TaskList = () => {
  const [tasks, _setTasks] = useContext(TasksContext);

  return (
    <>
      <h1>Task List</h1>

      {tasks.map(({ id, title, priority }) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{priority}</p>
        </div>
      ))}
    </>
  );
};
