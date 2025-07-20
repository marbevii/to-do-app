const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submited!");

    const taskText = input.value;
    const newTask = document.createElement("li");

    newTask.textContent = taskText;

    newTask.addEventListener("click", function () {
        newTask.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    deleteButton.addEventListener("click", function() {
        newTask.remove();
    });

    newTask.appendChild(deleteButton);
    
    list.appendChild(newTask);
    input.value = "";
});