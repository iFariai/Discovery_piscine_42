// Função para obter cookie pelo nome
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, value] = c.split('=');
    if (key === name) return decodeURIComponent(value);
  }
  return "";
}

// Função para gravar cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

// Função para carregar tarefas da cookie
function loadTasks() {
  const ft_list = document.getElementById('ft_list');
  ft_list.innerHTML = ''; // limpa lista
  const tasks = getCookie('tasks');
  if (!tasks) return;

  const taskArray = tasks.split('|'); // usa '|' para separar tarefas
  taskArray.forEach(task => {
    if (task.trim() !== '') addTaskToDOM(task);
  });
}

// Função para guardar todas as tarefas no cookie
function saveTasks() {
  const ft_list = document.getElementById('ft_list');
  const tasks = [];
  ft_list.querySelectorAll('div').forEach(div => tasks.push(div.textContent));
  setCookie('tasks', tasks.join('|'), 7);
}

// Adiciona uma tarefa ao DOM no topo da lista
function addTaskToDOM(taskText) {
  const ft_list = document.getElementById('ft_list');
  const newTask = document.createElement('div');
  newTask.textContent = taskText;
  newTask.addEventListener('click', () => {
    if (confirm(`Do you want to remove the task?\n"${taskText}"`)) {
      newTask.remove();
      saveTasks();
    }
  });
  ft_list.prepend(newTask);
}

document.getElementById('newBtn').addEventListener('click', () => {
  const task = prompt("New task");
  if (task && task.trim() !== '') {
    addTaskToDOM(task.trim());
    saveTasks();
  }
});

// Carrega a lista ao abrir página
window.onload = loadTasks;