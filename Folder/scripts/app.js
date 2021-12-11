var important = false;
var icon;

function togglePriority() {
    console.log("Clicked");

    if(important == true) {
        // set it as non-important
        icon.removeClass("fas").addClass("far");
        important = false;
    }
    else {
         // set it as important
        icon.removeClass("far").addClass("fas");
        important = true;
    }
}













function saveTask() {
    console.log("Saving task...");

    let dueDate = $("#dpDueDate").val();
    let title =$("#txtTitle").val();
    let desc = $("#txtDescription").val();
    let status = $("#selStatus").val();
    let color = $("#selColor").val();
    let category = $("#selCategory").val();

    let theTask = new Task(important, dueDate, title, desc, status, color, category);
    console.log(theTask);

    displayTask(theTask);
    clearForm();
}

function clearForm() {
    $("#dpDueDate").val("")
    $("#txtTitle").val("")
    $("#txtDescription").val("")
    $("#selStatus").val("")
    $("#selColor").val("")
    $("#selCategory").val("")
}

function displayTask(task) {

    let syntax = `<div class="task">
        <i class="far fa-star"></i>

        <div class="info">
            <h5>${task.title}</h5>
            <p>${task.description} </p>
        </div>

        <div class="details">
            <label class="status">${task.status}</label>
            <label class="category">${task.category}</label>
        </div>
    </div>`;


    $(".task-list").append(syntax);
}


function init() {
    console.log("Task Manager");
    icon = $("#iPriority")
    
    // hook events
    icon.click(togglePriority);
    $("#btnShowDetails").click();
    $("#btnSave").click(saveTask);  
    // load data
}

var show =

window.onload = init; 