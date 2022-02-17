import './style.css';
import addTask from './modules/addTask.js';
import removeTask from './modules/removeTask.js';
import removeCompleted from './modules/removeCompleted.js';
import trashCompleted from './modules/completed.js';
import { saveStorage, getStorage } from './modules/storage.js';

const add = document.querySelector('.add');
const text = document.querySelector('#text');
const clear = document.querySelector('#clear');

const tasks = [];

const addTaskStatic = (tasks, text) => {
  getStorage();
  addTask(tasks, text);
  saveStorage(tasks);
};

document.addEventListener('DOMContentLoaded', () => {
  const tasksFromStore = getStorage();
  tasksFromStore.forEach((task) => {
    const container = document.querySelector('.container');
    const taskDone = document.createElement('li');
    taskDone.classList.add('list');
    taskDone.draggable = true;
    const input = document.createElement('input');
    input.classList.add('check');
    input.type = 'checkbox';
    input.name = 'check';
    input.id = `${task.index}`;
    const label = document.createElement('label');
    label.contentEditable = true;
    label.classList.add('label');
    label.innerText = task.description;
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
    li.id = `${task.index}`;
    li.draggable = true;
    li.appendChild(taskContent);
    container.appendChild(li);
    const inputChecked = () => {
      if (input.checked) {
        label.classList.add('checked');
        task.bool = true;
        saveStorage(tasksFromStore);
      } else {
        label.classList.remove('checked');
        task.bool = false;
        saveStorage(tasksFromStore);
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
  });
  saveStorage(tasksFromStore);
});

add.addEventListener('click', (e) => {
  e.preventDefault();
  addTaskStatic(tasks, text);
  text.value = '';
});

clear.addEventListener('click', (e) => {
  e.preventDefault();
  removeCompleted();
  trashCompleted();
});
