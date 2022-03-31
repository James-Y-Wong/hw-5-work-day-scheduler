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

function init() {
    renderSavedTask();
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









// var currentTime = moment().format("H");
// console.log(currentTime);

// var timeblock8 = document.querySelector('#time8');
// console.log(timeblock8.textContent);
// var time8 = moment("timeblock8.textContent", "h").format("H");
// console.log(time8);

// var timeblockText = timeblock8.textContent;

// function check() {
//     if (currentTime > time8) {
//         console.log("true");
//     } 
//     if (currentTime == time8) {
//         console.log("same"); 
//     } else {
//         console.log("false");
//     }
// }

// check()

init();