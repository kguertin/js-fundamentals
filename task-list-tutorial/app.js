// Define UI vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load All Event Listeners
loadEventListeners();

//Load All Event Listeners
function loadEventListeners() {
  //Add Task Event
  form.addEventListener("submit", addTask);
}

//Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //Create li Element
  const li = document.createElement("li");
  //Add Class
  li.className = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // Add Class
  link.className = "delete-item secondary-content";
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Clear Input
  taskInput.value = "";

  e.preventDefault();
}
