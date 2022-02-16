import './style.css';
import addTask from './modules/addTask.js';
import { saveStorage, getStorage } from './modules/storage.js';

const add = document.querySelector('.add');
const text = document.querySelector('#text');

const tasks = [];

const addTaskStatic = (tasks, text) => {
  getStorage(tasks);
  addTask(tasks, text);
  saveStorage(tasks);
};

add.addEventListener('click', (e) => {
  e.preventDefault();
  addTaskStatic(tasks, text);
  text.value = '';
});
