import { saveStorage, getStorage } from './storage.js';

const removeTask = (listElem, tasks) => {
  getStorage(tasks);
  const id = JSON.parse(listElem.id);
  tasks = tasks.filter((taskElem) => taskElem.index !== id);
  for (let i = 0; i < tasks.length; i += 1) {
    const task = tasks[i];
    if (task.index > 0) {
      task.index -= 1;
    }
  }
  saveStorage(tasks);
  return tasks;
};

export default removeTask;
