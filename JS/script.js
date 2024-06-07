let tasks = [];

document.addEventListener("DOMContentLoaded", function() {
    const addTaskForm = document.getElementById("add-task-form");
    const taskTable = document.getElementById("task-table");
    const taskList = document.getElementById("task-list");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    addTaskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("due-date").value;
        const priority = document.getElementById("priority").value;
        const task = {
            title,
            description,
            dueDate,
            priority,
            status: "pending"
        };
        tasks.push(task);
        renderTasks();
        addTaskForm.reset();
    });






















    
});