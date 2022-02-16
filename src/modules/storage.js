const saveStorage = (items) => {
  localStorage.setItem('todo-list', JSON.stringify(items));
};

const getStorage = () => {
  const tasks = localStorage.getItem('todo-list')
    ? JSON.parse(localStorage.getItem('todo-list'))
    : [];
  return tasks;
};

export { saveStorage, getStorage };
