function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;
    if (taskText.trim() !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;
        var deleteButton = document.createElement("span");
        deleteButton.textContent = "❌";
        deleteButton.className = "delete";
        deleteButton.onclick = function() {
            li.remove();
        };
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}