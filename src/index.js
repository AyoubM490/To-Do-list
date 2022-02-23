/* eslint-disable radix */
/* eslint-disable import/no-cycle */

import './style.css';
import check from './check.js';
import addNewTask from './addlist.js';
import trashCompleted from './completed.js';
import trashTask from './trashTask.js';
import editTask from './edit.js';
import { saveStorage, getStorage } from './storage.js';

const listContainer = document.querySelector('.container');
const addNewTaskInput = document.querySelector('#text');
const addNewTaskBtn = document.querySelector('.add');
const clearCompletedTask = document.querySelector('.clear');

const populateList = () => {
  while (listContainer.lastChild) {
    listContainer.removeChild(listContainer.lastChild);
  }

  const tasks = getStorage();

  if (tasks != null) {
    for (let i = 0; i < tasks.length; i += 1) {
      const list = document.createElement('li');
      list.classList.add('list');
      list.id = tasks[i].index;
      list.draggable = true;

      const listFChild = document.createElement('div');
      listFChild.classList.add('div1');

      const input = document.createElement('input');
      input.classList.add('check');
      input.type = 'checkbox';
      input.name = 'check1';

      if (tasks[i].completed) {
        input.checked = true;
      }

      const label = document.createElement('label');
      label.contentEditable = true;
      label.classList.add('label');
      label.innerHTML = tasks[i].description;
      label.style.textDecoration = tasks[i].completed === true ? 'line-through' : 'none';
      label.style.color = '#444';

      const trash = document.createElement('span');
      trash.innerHTML = "<i class='fas fa-trash-alt'></i>";
      trash.style.display = 'flex';
      trash.style.cursor = 'pointer';
      trash.id = tasks.indexOf(tasks[i]);

      list.appendChild(listFChild);
      listFChild.appendChild(input);
      listFChild.appendChild(label);
      listFChild.appendChild(trash);
      listContainer.appendChild(list);

      label.addEventListener('focus', () => {
        trash.style.display = 'none';
        trash.style.color = '#fff';
        trash.style.cursor = 'pointer';
        label.style.outline = 'none';
      });

      label.addEventListener('blur', (e) => {
        editTask(e.target, tasks, tasks[i]);
        populateList();
      });

      input.addEventListener('change', (e) => {
        check(e.target, tasks[i]);
        saveStorage(tasks);
      });

      trash.addEventListener('mousedown', (e) => {
        e.preventDefault();
        trashTask(parseInt(trash.id));
        populateList();
      });
    }
  }
};

addNewTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewTask(addNewTaskInput);
});

clearCompletedTask.addEventListener('click', (e) => {
  e.preventDefault();
  trashCompleted();
  populateList();
});

export default populateList;

window.onload = populateList;
