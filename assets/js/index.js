const taskInput = document.getElementById("input"),
  taskList = document.getElementById("task-list"),
  taskTotal = document.getElementById("total"),
  taskDone = document.getElementById("done"),
  tasks = [
    { id: Math.ceil(Math.random()*100), name: 'Tarea prueba 1', done: false },
    { id: Math.ceil(Math.random()*100), name: 'Tarea prueba 2', done: false },
    { id: Math.ceil(Math.random()*100), name: 'Tarea prueba 3', done: false }
  ];

const deleteTask = (id) => {
  const index = tasks.findIndex((ele) => ele.id == id);
  tasks.splice(index, 1);
  renderTemplate();
};

const updateTask = (id) => {
  const index = tasks.findIndex((ele) => ele.id == id);
  tasks[index].done ? (tasks[index].done = false) : (tasks[index].done = true);
  renderTemplate();
};

const addTask = (task) => {
  if (task.value != "") {
    const newTask = { id: Math.ceil(Math.random()*100), name: task.value, done: false };
    tasks.push(newTask);
    task.value = "";
    renderTemplate();
    return;
  }
  return alert("Complete tarea");
};

const renderTemplate = () => {
  let html = "";
  let total = 0,
    done = 0;
  tasks.forEach((task, index, arr) => {
    if (task.done) {
      done++;
      var style = "checked";
    }
    html += `<li class="${style}"}> ${task.name} <i class="fa-solid fa-square-check" onclick="{updateTask(${task.id})}"></i><i class="fa solid fa-xmark" onclick="{confirm('¿Estás seguro de eliminar la tarea ${task.name}?') ? deleteTask(${task.id}) : null}"></i></li>`;
    total++;
  });
  taskList.innerHTML = html;
  taskTotal.innerHTML = total;
  taskDone.innerHTML = done;
};

document.querySelector("#add-task").addEventListener("click", () => {
  addTask(taskInput);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask(taskInput);
  }
});

renderTemplate();