import './style.css';
import { addTask } from './modules/addTask.js';

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
  tasks.forEach((task) => {
    addTask(task);
  });
};

addTaskStatic(tasks);
