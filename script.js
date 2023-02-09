const form = document.querySelector("#form");
const taskInput = document.querySelector("#input");
const taskList = document.querySelector("#lista");

form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);

loadTasks();

function addTask(e) {
  e.preventDefault();

  const task = taskInput.value;

  if (task === "") {
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `<p>${task}</p><button>Excluir</button>`;

  taskList.appendChild(li);
  taskInput.value = "";

  saveTasks();
}

function removeTask(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    saveTasks();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    taskList.innerHTML = savedTasks;
  }
}
