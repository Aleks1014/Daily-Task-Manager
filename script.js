const currentDate = new Date().toDateString();

const date = document.getElementById("date").textContent;

document.getElementById("date").textContent = currentDate;

function addTask() {
  const task = document.getElementById("task").value;
  let listTask = document.getElementById("tasksList");
  const taskListElement = document.createElement("li");
  taskListElement.textContent = task;
  listTask.appendChild(taskListElement);
  document.getElementById("task").value = "";
}

function completeTask() {
  const listTask = document.getElementById("tasksList");
  const taskItems = listTask.getElementsByTagName("li");
  const taskID = parseInt(document.getElementById("taskCompleted").value);
  if (taskID - 1 < taskItems.length) {
    taskItems[taskID - 1].style.color = "#3ec180";
  } else {
    alert("Wrong task");
  }
  document.getElementById("taskCompleted").value = "";
}

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function () {
  const taskItems = document.getElementById("tasksList");
  taskItems.innerHTML = "";
});