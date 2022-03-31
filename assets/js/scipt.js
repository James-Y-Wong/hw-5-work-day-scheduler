// adds current day to top of calendar
var rightNow = moment().format('dddd, MMMM Do');
$('#currentDay').text(rightNow);

var saveBtn8 = $('#8button-addon2');
var taskText8 = $('#8user-input');
var saveBtn9 = $('#9button-addon2');
var taskText9 = $('#9user-input');
var saveBtn10 = $('#10button-addon2');
var taskText10 = $('#10user-input');
var saveBtn11 = $('#11button-addon2');
var taskText11 = $('#11user-input');
var saveBtn12 = $('#12button-addon2');
var taskText12 = $('#12user-input');
var saveBtn1 = $('#1button-addon2');
var taskText1 = $('#1user-input');
var saveBtn2 = $('#2button-addon2');
var taskText2 = $('#2user-input');
var saveBtn3 = $('#3button-addon2');
var taskText3 = $('#3user-input');
var saveBtn4 = $('#4button-addon2');
var taskText4 = $('#4user-input');
var saveBtn5 = $('#5button-addon2');
var taskText5 = $('#5user-input');
var plannerTime8 = moment("8", "HH:mm").format("h A");
var plannerTime9 = moment("9", "HH:mm").format("h A");
var plannerTime10 = moment("10", "HH:mm").format("h A");
var plannerTime11 = moment("11", "HH:mm").format("h A");
var plannerTime12 = moment("12", "HH:mm").format("h A");
var plannerTime1 = moment("13", "HH:mm").format("h A");
var plannerTime2 = moment("14", "HH:mm").format("h A");
var plannerTime3 = moment("15", "HH:mm").format("h A");
var plannerTime4 = moment("16", "HH:mm").format("h A");
var plannerTime5 = moment("17", "HH:mm").format("h A");
var currentTime = moment().format("h A");

function init() {
    renderSavedTask();
    timeComparison8();
    timeComparison9();
    timeComparison10();
    timeComparison11();
    timeComparison12();
    timeComparison1();
    timeComparison2();
    timeComparison3();
    timeComparison4();
    timeComparison5();
}

function timedRefresh(timeoutPeriod) {
    setTimeout('location.reload(true);', timeoutPeriod);
}

window.onload = timedRefresh(60000);

function timeComparison8() {
    if (currentTime < plannerTime8) {
        $('#8user-input').css("background-color", "#d3d3d3");
        $('#8user-input').css("color", "white");
        $('#8user-input').css("border", "grey 1px solid");
    } 
    if (currentTime == plannerTime8) {
        $('#8user-input').css("background-color", "#ff6961");
        $('#8user-input').css("color", "white");
        $('#8user-input').css("border", "grey 1px solid");
    } 
    if (currentTime > plannerTime8) {
        $('#8user-input').css("background-color", "#77dd77");
        $('#8user-input').css("color", "white");
    }   $('#8user-input').css("border", "grey 1px solid");
}

function timeComparison9() {
    if (currentTime < plannerTime9) {
        $('#9user-input').css("background-color", "#d3d3d3");
        $('#9user-input').css("color", "white");
        $('#9user-input').css("border", "grey 1px solid");
    } 
    if (currentTime == plannerTime9) {
        $('#9user-input').css("background-color", "#ff6961");
        $('#9user-input').css("color", "white");
        $('#9user-input').css("border", "grey 1px solid");
    } 
    if (currentTime > plannerTime9) {
        $('#9user-input').css("background-color", "#77dd77");
        $('#9user-input').css("color", "white");
        $('#9user-input').css("border", "grey 1px solid");
    }
}

function timeComparison10() {
    if (currentTime > plannerTime10) {
        $('#10user-input').css("background-color", "#d3d3d3");
        $('#10user-input').css("color", "white");
        $('#10user-input').css("border", "grey 1px solid");
    } 
    if (currentTime == plannerTime10) {
        $('#10user-input').css("background-color", "#ff6961");
        $('#10user-input').css("color", "white");
        $('#10user-input').css("border", "grey 1px solid");
    } 
    if (currentTime < plannerTime10) {
        $('#10user-input').css("background-color", "#77dd77");
        $('#10user-input').css("color", "white");
        $('#10user-input').css("border", "grey 1px solid");
    }
}

function timeComparison11() {
    if (currentTime > plannerTime11) {
        $('#11user-input').css("background-color", "#d3d3d3");
        $('#11user-input').css("color", "white");
        $('#11user-input').css("border", "grey 1px solid");
    } 
    if (currentTime == plannerTime11) {
        $('#11user-input').css("background-color", "#ff6961");
        $('#11user-input').css("color", "white");
        $('#11user-input').css("border", "grey 1px solid");
    } 
    if (currentTime < plannerTime11) {
        $('#11user-input').css("background-color", "#77dd77");
        $('#11user-input').css("color", "white");
        $('#11user-input').css("border", "grey 1px solid");
    }
}

function timeComparison12() {
    if (currentTime > plannerTime12) {
        $('#12user-input').css("background-color", "#d3d3d3");
        $('#12user-input').css("color", "white");
        $('#12user-input').css("border", "grey 1px solid");
    } 
    if (currentTime == plannerTime12) {
        $('#12user-input').css("background-color", "#ff6961");
        $('#12user-input').css("color", "white");
        $('#12user-input').css("border", "grey 1px solid");
    } 
    if (currentTime < plannerTime12) {
        $('#12user-input').css("background-color", "#77dd77");
        $('#12user-input').css("color", "white");
        $('#12user-input').css("border", "grey 1px solid");
    }
}
function timeComparison1() {
    if (currentTime > plannerTime1) {
        $('#1user-input').css("background-color", "#d3d3d3");
        $('#1user-input').css("color", "white");
        $('#1user-input').css("border", "grey 1px solid");
    } 
    if (currentTime == plannerTime1) {
        $('#1user-input').css("background-color", "#ff6961");
        $('#1user-input').css("color", "white");
        $('#1user-input').css("border", "grey 1px solid");
    } 
    if (currentTime < plannerTime1) {
        $('#1user-input').css("background-color", "#77dd77");
        $('#1user-input').css("color", "white");
        $('#1user-input').css("border", "grey 1px solid");
    }
}

function timeComparison2() {
    if (currentTime > plannerTime2) {
        $('#2user-input').css("background-color", "#d3d3d3");
        $('#2user-input').css("color", "white");
        $('#2user-input').css("border", "grey 1px solid");
    } 
    if (currentTime == plannerTime2) {
        $('#2user-input').css("background-color", "#ff6961");
        $('#2user-input').css("color", "white");
        $('#2user-input').css("border", "grey 1px solid");
    } 
    if (currentTime < plannerTime2) {
        $('#2user-input').css("background-color", "#77dd77");
        $('#2user-input').css("color", "white");
        $('#2user-input').css("border", "grey 1px solid");
    }
}

function timeComparison3() {
    if (currentTime > plannerTime3) {
        $('#3user-input').css("background-color", "#d3d3d3");
        $('#3user-input').css("color", "white");
        $('#3user-input').css("border", "grey 1px solid");
    } 
    if (currentTime == plannerTime3) {
        $('#3user-input').css("background-color", "#ff6961");
        $('#3user-input').css("color", "white");
        $('#3user-input').css("border", "grey 1px solid");
    } 
    if (currentTime < plannerTime3) {
        $('#3user-input').css("background-color", "#77dd77");
        $('#3user-input').css("color", "white");
        $('#3user-input').css("border", "grey 1px solid");
    }
}

function timeComparison4() {
    if (currentTime > plannerTime4) {
        $('#4user-input').css("background-color", "#d3d3d3");
        $('#4user-input').css("color", "white");
        $('#4user-input').css("border", "grey 1px solid");
    } 
    if (currentTime == plannerTime4) {
        $('#4user-input').css("background-color", "#ff6961");
        $('#4user-input').css("color", "white");
        $('#4user-input').css("border", "grey 1px solid");
    } 
    if (currentTime < plannerTime4) {
        $('#4user-input').css("background-color", "#77dd77");
        $('#4user-input').css("color", "white");
        $('#4user-input').css("border", "grey 1px solid");
    }
}

function timeComparison5() {
    if (currentTime > plannerTime5) {
        $('#5user-input').css("background-color", "#d3d3d3");
        $('#5user-input').css("color", "white");
        $('#5user-input').css("border", "grey 1px solid");
    } 
    if (currentTime == plannerTime5) {
        $('#5user-input').css("background-color", "#ff6961");
        $('#5user-input').css("color", "white");
        $('#5user-input').css("border", "grey 1px solid");
    } 
    if (currentTime < plannerTime5) {
        $('#5user-input').css("background-color", "#77dd77");
        $('#5user-input').css("color", "white");
        $('#5user-input').css("border", "grey 1px solid");
    }
}



function renderSavedTask() {
    $('#8user-input').text(localStorage.getItem("8"));
    $('#9user-input').text(localStorage.getItem("9"));
    $('#10user-input').text(localStorage.getItem("10"));
    $('#11user-input').text(localStorage.getItem("11"));
    $('#12user-input').text(localStorage.getItem("12"));
    $('#1user-input').text(localStorage.getItem("1"));
    $('#2user-input').text(localStorage.getItem("2"));
    $('#3user-input').text(localStorage.getItem("3"));
    $('#4user-input').text(localStorage.getItem("4"));
    $('#5user-input').text(localStorage.getItem("5"));
}

function saveTask8() {
    localStorage.setItem("8", taskText8.val());
}
function saveTask9() {
    localStorage.setItem("9", taskText9.val());
}
function saveTask10() {
    localStorage.setItem("10", taskText10.val());
}
function saveTask11() {
    localStorage.setItem("11", taskText11.val());
}
function saveTask12() {
    localStorage.setItem("12", taskText12.val());
}
function saveTask1() {
    localStorage.setItem("1", taskText1.val());
}
function saveTask2() {
    localStorage.setItem("2", taskText2.val());
}
function saveTask3() {
    localStorage.setItem("3", taskText3.val());
}
function saveTask4() {
    localStorage.setItem("4", taskText4.val());
}
function saveTask5() {
    localStorage.setItem("5", taskText5.val());
}

saveBtn8.on("click", function() {
    saveTask8();
})

saveBtn9.on("click", function() {
    saveTask9();
})
 
saveBtn10.on("click", function() {
    saveTask10();
})

saveBtn11.on("click", function() {
    saveTask11();
})

saveBtn12.on("click", function() {
    saveTask12();
})

saveBtn1.on("click", function() {
    saveTask1();
})

saveBtn2.on("click", function() {
    saveTask2();
})

saveBtn3.on("click", function() {
    saveTask3();
})

saveBtn4.on("click", function() {
    saveTask4();
})

saveBtn5.on("click", function() {
    saveTask5();
})

$('#planner-time8').text(plannerTime8);
$('#planner-time9').text(plannerTime9);
$('#planner-time10').text(plannerTime10);
$('#planner-time11').text(plannerTime11);
$('#planner-time12').text(plannerTime12);
$('#planner-time1').text(plannerTime1);
$('#planner-time2').text(plannerTime2);
$('#planner-time3').text(plannerTime3);
$('#planner-time4').text(plannerTime4);
$('#planner-time5').text(plannerTime5);

init();