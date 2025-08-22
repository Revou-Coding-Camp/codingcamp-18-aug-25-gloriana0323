console.log("Hello, World!")

function validateForm(){

    const taskInput = document.getElementById("task-input");
    const dueDateInput = document.getElementById("due-date-input")

    if (taskInput.value == '' || dueDateInput.value == ''){
        alert("Please enter a task.")
    }else{
        addTodo(taskInput.value, dueDateInput.value);
    }

}
function addTodo(task,dueDate){
    listTodo.push(task);
    console.log("Task added:",task);
    console.log(listTodo);

    renderTodoList();
    
}