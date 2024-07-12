$(document).on("pageinit", function() {
    // Initialise la listview
    
    const encours = "#taskList"
    $(encours).listview();
    $("#finishTask").listview();
    $(encours).on("swiperight", "li", function (event) {
        event.preventDefault();
        const task = $(this);
        if (task.hasClass("done")) {
            task.removeClass("done");
        }else{
            task.addClass("done");
        }
        task.animate({ left: "+=100%" }, 400, function() {
            task.css("left", "0");
            $("#finishTask").listview('refresh');
            $(encours).listview('refresh');
        });
    });



    $(encours).on("swipeleft", "li", function (event) {
        event.preventDefault();
        const taskList = document.getElementById('finishTask');
        const task = $(this);
        task.animate({ right: "+=100%" }, 400, function() {
                    task.appendTo("#finishTask").css("left", "0");
                    $("#finishTask").listview('refresh');
                    $(encours).listview('refresh');
                });
        task.focus();

    });



});


function ajouterTache() {
    event.preventDefault();
    const task = document.getElementById('task');
    if(task.value){
        const taskList = document.getElementById('taskList');
        taskList.innerHTML += '<li>' + task.value + '</li>';
        $(taskList).listview('refresh');
        task.value = '';
        task.focus();
    }
}

function reinitialiser() {
    event.preventDefault();
    const taskList = document.getElementById('taskList');
    const finishTask = document.getElementById('finishTask');
    taskList.innerHTML = '';
    finishTask.innerHTML = '';
    $(taskList).listview('refresh');
    const task = document.getElementById('task');
    task.value = '';
    task.focus();
}
