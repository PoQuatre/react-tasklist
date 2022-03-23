import { createContext, useState } from 'react';

import { TaskList } from 'components';
import type { ITask, StateFrom } from 'types';

export const TasksContext = createContext<StateFrom<ITask[]>>([[], () => {}]);

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: 'Task 1', priority: 'high' },
    { id: 2, title: 'Task 2', priority: 'normal' },
  ]);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      <TaskList />
    </TasksContext.Provider>
  );
};
