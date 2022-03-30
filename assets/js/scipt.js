
// adds current day to top of calendar
var rightNow = moment().format('dddd, MMMM Do');
$('#currentDay').text(rightNow);

// var calendarTime = moment("8", "HH:mm").format("H A");
// console.log(calendarTime);

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
