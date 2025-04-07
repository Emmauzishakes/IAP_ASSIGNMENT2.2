const newTask = document.getElementById("newTask");
const submit = document.getElementById("submit");
const taskList = document.getElementById("taskList");

// Enable button only when input is not empty
newTask.addEventListener("input", () => {
    submit.disabled = !newTask.value.trim();
});

document.getElementById("taskForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Create a new list item
    const task = document.createElement("li");
    
    const taskNumber = taskList.children.length + 1;
    task.textContent = `${newTask.value.trim()}`;

    // Append task to the list
    taskList.append(task);

    // Clear input field and disable button
    newTask.value = "";
    submit.disabled = true;
});