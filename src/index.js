import './style.css';
import addTask from './modules/addTask.js';

const tasks = [
  {
    description: 'wash the dishes',
    bool: false,
    index: 1,
  },
  {
    description: 'Complete To Do list project',
    bool: false,
    index: 2,
  },
];

const addTaskStatic = (tasks) => {
  tasks
    .sort((a, b) => a.index - b.index)
    .forEach((task) => {
      addTask(task);
    });
};

addTaskStatic(tasks);
