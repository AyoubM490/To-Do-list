import removeTask from './removeTask.js';

const addTask = (tasks, text) => {
  const description = text.value;
  const bool = false;
  const index = tasks.length;
  tasks.push({ description, bool, index });
  const container = document.querySelector('.container');
  const taskDone = document.createElement('li');
  taskDone.classList.add('list');
  taskDone.draggable = true;
  const input = document.createElement('input');
  input.classList.add('check');
  input.type = 'checkbox';
  input.name = 'check';
  input.id = `${index}`;
  const label = document.createElement('label');
  label.contentEditable = true;
  label.classList.add('label');
  label.innerText = description;
  const span = document.createElement('span');
  span.classList.add('trash');
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt');
  span.appendChild(i);
  const taskContent = document.createElement('div');
  taskContent.classList.add('div1');
  taskContent.appendChild(input);
  taskContent.appendChild(label);
  taskContent.appendChild(span);
  const li = document.createElement('li');
  li.classList.add('list');
  li.id = `${index}`;
  li.draggable = true;
  li.appendChild(taskContent);
  container.appendChild(li);

  const inputChecked = () => {
    if (input.checked) {
      label.classList.add('checked');
      tasks[index].bool = true;
    } else {
      label.classList.remove('checked');
      tasks[index].bool = false;
    }
  };

  const remove = () => {
    container.removeChild(li);
    removeTask(li, tasks);
  };
  input.addEventListener('click', inputChecked);
  span.addEventListener('click', () => {
    remove();
  });
};

export default addTask;
