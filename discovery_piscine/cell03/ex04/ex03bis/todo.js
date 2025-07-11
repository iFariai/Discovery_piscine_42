$(document).ready(function () {
  // Carrega tarefas dos cookies ao iniciar
  loadTasks();

  $('#newBtn').click(function () {
    const task = prompt("Enter a new TO DO:");
    if (task) {
      addTask(task);
    }
  });

  function addTask(text) {
    const $div = $('<div></div>').text(text);
    $div.click(function () {
      if (confirm("Do you want to delete this TO DO?")) {
        $(this).remove();
        saveTasks();
      }
    });
    $('#ft_list').prepend($div);
    saveTasks();
  }

  function saveTasks() {
    let tasks = [];
    $('#ft_list div').each(function () {
      tasks.push($(this).text());
    });
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(tasks)) + "; path=/";
  }

  function loadTasks() {
    const match = document.cookie.match(/(?:^|;) ?todos=([^;]*)(?:;|$)/);
    if (match) {
      const tasks = JSON.parse(decodeURIComponent(match[1]));
      tasks.forEach(task => addTask(task));
    }
  }
});