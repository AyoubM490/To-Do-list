import { getStorage } from './storage.js';

const removeCompleted = () => {
  const lis = document.querySelectorAll('li');
  const container = document.querySelector('.container');
  const tasksFromStore = getStorage();
  const taskToFilter = tasksFromStore.filter((task) => task.bool === true);
  lis.forEach((li) => {
    const id = JSON.parse(li.id);
    if (id === taskToFilter[0].index) {
      container.removeChild(li);
    }
  });
};

export default removeCompleted;
