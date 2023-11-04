// Get elements from the HTML
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;
    taskItem.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });
    taskList.appendChild(taskItem);
    newTaskInput.value = "";
  }
}

// Event listener for adding a task
addTaskButton.addEventListener("click", addTask);
