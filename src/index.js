import './style.css';
import addTask from './modules/addTask.js';

const add = document.querySelector('.add');
const text = document.querySelector('#text');

const tasks = [];

const addTaskStatic = (tasks, text) => {
  addTask(tasks, text);
};

add.addEventListener('click', (e) => {
  e.preventDefault();
  addTaskStatic(tasks, text);
  text.value = '';
});
