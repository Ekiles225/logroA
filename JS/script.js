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

    //Estructura de evento clik para marcar como completado y eliminar
    taskTable.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            const taskId = event.target.dataset.taskId;
            if (event.target.textContent === "Complete") {
                tasks[taskId].status = "completed";
            } else if (event.target.textContent === "Delete") {
                tasks.splice(taskId, 1);
            }
            renderTasks();
        }
    });

    //EvenListener para buscar

    searchBtn.addEventListener("click", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredTasks = tasks.filter(function(task) {
            return task.title.toLowerCase().includes(searchTerm);
        });
        renderTasks(filteredTasks);
    });



    //Estructura para mostrar en la tabla


    function renderTasks(tasksToRender = tasks) {
        taskList.innerHTML = "";
        tasksToRender.forEach(function(task, index) {
            const taskRow = document.createElement("tr");
            taskRow.innerHTML = `
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>${task.dueDate}</td>
                <td>${task.priority}</td>
                <td>${task.status}</td>
                <td>
                    <button data-task-id="${index}">Complete</button>
                    <button data-task-id="${index}">Delete</button>
                </td>
            `;
            taskList.appendChild(taskRow);
        });
    }

    renderTasks(); 

});