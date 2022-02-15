const addTask = (task) => {
  const container = document.querySelector('.container');
  const taskDone = document.createElement('li');
  taskDone.classList.add('list');
  taskDone.draggable = true;
  const input = document.createElement('input');
  input.classList.add('check');
  input.type = 'checkbox';
  input.name = 'check';
  input.id = 'check';
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
  li.id = task.index;
  li.draggable = true;
  li.appendChild(taskContent);
  container.appendChild(li);

  const inputChecked = (task) => {
    if (input.checked) {
      label.classList.add('checked');
      task.bool = 'true';
    } else {
      label.classList.remove('checked');
      task.bool = 'false';
    }
  };

  input.addEventListener('click', inputChecked);
};

// eslint-disable-next-line import/prefer-default-export
export { addTask };
