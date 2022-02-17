import { saveStorage, getStorage } from './storage.js';
// eslint-disable-next-line import/no-cycle
import populateList from '../index.js';

const addNewTask = (input) => {
  const taskList = getStorage();
  const task = {
    index: taskList.length + 1,
    completed: false,
    description: input.value,
  };

  taskList.push(task);

  saveStorage(taskList);
  input.value = '';
  populateList();
  return task;
};

export default addNewTask;
