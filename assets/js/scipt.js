// adds current day to top of calendar
var rightNow = moment().format('dddd, MMMM Do');
$('#currentDay').text(rightNow);

// grabs elements from index.html
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

// formats each timeblock
var plannerTime8 = moment("8", "h").format("h A");
var plannerTime9 = moment("9", "HH:mm").format("h A");
var plannerTime10 = moment("10", "HH:mm").format("h A");
var plannerTime11 = moment("11", "HH:mm").format("h A");
var plannerTime12 = moment("12", "HH:mm").format("h A");
var plannerTime1 = moment("13", "HH:mm").format("h A");
var plannerTime2 = moment("14", "HH:mm").format("h A");
var plannerTime3 = moment("15", "HH:mm").format("h A");
var plannerTime4 = moment("16", "HH:mm").format("h A");
var plannerTime5 = moment("17", "HH:mm").format("h A");
var currentTime = moment().format("H");


var currentTime8 = "08";
var currentTime9 = "09";
var currentTime10 = "10";
var currentTime11 = "11";
var currentTime12 = "12";
var currentTime1 = "13";
var currentTime2 = "14";
var currentTime3 = "15";
var currentTime4 = "16";
var currentTime5 = "17";

console.log(currentTime)
console.log(currentTime8)

if (currentTime12 > currentTime) {
    console.log("true");
} if (currentTime12 === currentTime) {
    console.log("same");
} else {
    console.log("false");
}


// function fires on reload
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

// auto refresh function to make sure the color coding is live
function timedRefresh(timeoutPeriod) {
    setTimeout('location.reload(true);', timeoutPeriod);
}

window.onload = timedRefresh(60000);

// function for color coding timeblocks. Will be called in the init() 
function timeComparison8() {
    if (currentTime8 < currentTime) {
        $('#8user-input').css("background-color", "#d3d3d3");
        $('#8user-input').css("color", "white");
        $('#8user-input').css("border", "grey 1px solid");
    } 
    if (currentTime8 === currentTime) {
        $('#8user-input').css("background-color", "#ff6961");
        $('#8user-input').css("color", "white");
        $('#8user-input').css("border", "grey 1px solid");
    } 
    if (currentTime8 > currentTime) {
        $('#8user-input').css("background-color", "#77dd77");
        $('#8user-input').css("color", "white");
        $('#8user-input').css("border", "grey 1px solid");
    }
}

// function for color coding timeblocks. Will be called in the init() 
function timeComparison9() {
    if (currentTime9 < currentTime) {
        $('#9user-input').css("background-color", "#d3d3d3");
        $('#9user-input').css("color", "white");
        $('#9user-input').css("border", "grey 1px solid");
    } 
    if (currentTime9 === currentTime) {
        $('#9user-input').css("background-color", "#ff6961");
        $('#9user-input').css("color", "white");
        $('#9user-input').css("border", "grey 1px solid");
    } 
    if (currentTime9 > currentTime) {
        $('#9user-input').css("background-color", "#77dd77");
        $('#9user-input').css("color", "white");
        $('#9user-input').css("border", "grey 1px solid");
    }
}

// function for color coding timeblocks. Will be called in the init() 
function timeComparison10() {
    if (currentTime10 < currentTime) {
        $('#10user-input').css("background-color", "#d3d3d3");
        $('#10user-input').css("color", "white");
        $('#10user-input').css("border", "grey 1px solid");
    } 
    if (currentTime10 === currentTime) {
        $('#10user-input').css("background-color", "#ff6961");
        $('#10user-input').css("color", "white");
        $('#10user-input').css("border", "grey 1px solid");
    } 
    if (currentTime10 > currentTime) {
        $('#10user-input').css("background-color", "#77dd77");
        $('#10user-input').css("color", "white");
        $('#10user-input').css("border", "grey 1px solid");
    }
}

// function for color coding timeblocks. Will be called in the init()
function timeComparison11() {
    if (currentTime11 < currentTime) {
        $('#11user-input').css("background-color", "#d3d3d3");
        $('#11user-input').css("color", "white");
        $('#11user-input').css("border", "grey 1px solid");
    } 
    if (currentTime11 === currentTime) {
        $('#11user-input').css("background-color", "#ff6961");
        $('#11user-input').css("color", "white");
        $('#11user-input').css("border", "grey 1px solid");
    } 
    if (currentTime11 > currentTime) {
        $('#11user-input').css("background-color", "#77dd77");
        $('#11user-input').css("color", "white");
        $('#11user-input').css("border", "grey 1px solid");
    }
}

// function for color coding timeblocks. Will be called in the init()
function timeComparison12() {
    if (currentTime12 < currentTime) {
        $('#12user-input').css("background-color", "#d3d3d3");
        $('#12user-input').css("color", "white");
        $('#12user-input').css("border", "grey 1px solid");
    } 
    if (currentTime12 === currentTime) {
        $('#12user-input').css("background-color", "#ff6961");
        $('#12user-input').css("color", "white");
        $('#12user-input').css("border", "grey 1px solid");
    } 
    if (currentTime12 > currentTime) {
        $('#12user-input').css("background-color", "#77dd77");
        $('#12user-input').css("color", "white");
        $('#12user-input').css("border", "grey 1px solid");
    }
}

// function for color coding timeblocks. Will be called in the init()
function timeComparison1() {
    if (currentTime1 < currentTime) {
        $('#1user-input').css("background-color", "#d3d3d3");
        $('#1user-input').css("color", "white");
        $('#1user-input').css("border", "grey 1px solid");
    } 
    if (currentTime1 === currentTime) {
        $('#1user-input').css("background-color", "#ff6961");
        $('#1user-input').css("color", "white");
        $('#1user-input').css("border", "grey 1px solid");
    } 
    if (currentTime1 > currentTime) {
        $('#1user-input').css("background-color", "#77dd77");
        $('#1user-input').css("color", "white");
        $('#1user-input').css("border", "grey 1px solid");
    }
}

// function for color coding timeblocks. Will be called in the init()
function timeComparison2() {
    if (currentTime2 < currentTime) {
        $('#2user-input').css("background-color", "#d3d3d3");
        $('#2user-input').css("color", "white");
        $('#2user-input').css("border", "grey 1px solid");
    } 
    if (currentTime2 === currentTime) {
        $('#2user-input').css("background-color", "#ff6961");
        $('#2user-input').css("color", "white");
        $('#2user-input').css("border", "grey 1px solid");
    } 
    if (currentTime2 > currentTime) {
        $('#2user-input').css("background-color", "#77dd77");
        $('#2user-input').css("color", "white");
        $('#2user-input').css("border", "grey 1px solid");
    }
}

// function for color coding timeblocks. Will be called in the init()
function timeComparison3() {
    if (currentTime3 < currentTime) {
        $('#3user-input').css("background-color", "#d3d3d3");
        $('#3user-input').css("color", "white");
        $('#3user-input').css("border", "grey 1px solid");
    } 
    if (currentTime3 === currentTime) {
        $('#3user-input').css("background-color", "#ff6961");
        $('#3user-input').css("color", "white");
        $('#3user-input').css("border", "grey 1px solid");
    } 
    if (currentTime3 > currentTime) {
        $('#3user-input').css("background-color", "#77dd77");
        $('#3user-input').css("color", "white");
        $('#3user-input').css("border", "grey 1px solid");
    }
}

// function for color coding timeblocks. Will be called in the init()
function timeComparison4() {
    if (currentTime4 < currentTime) {
        $('#4user-input').css("background-color", "#d3d3d3");
        $('#4user-input').css("color", "white");
        $('#4user-input').css("border", "grey 1px solid");
    } 
    if (currentTime4 === currentTime) {
        $('#4user-input').css("background-color", "#ff6961");
        $('#4user-input').css("color", "white");
        $('#4user-input').css("border", "grey 1px solid");
    } 
    if (currentTime4 > currentTime) {
        $('#4user-input').css("background-color", "#77dd77");
        $('#4user-input').css("color", "white");
        $('#4user-input').css("border", "grey 1px solid");
    }
}

// function for color coding timeblocks. Will be called in the init()
function timeComparison5() {
    if (currentTime5 < currentTime) {
        $('#5user-input').css("background-color", "#d3d3d3");
        $('#5user-input').css("color", "white");
        $('#5user-input').css("border", "grey 1px solid");
    } 
    if (currentTime5 === currentTime) {
        $('#5user-input').css("background-color", "#ff6961");
        $('#5user-input').css("color", "white");
        $('#5user-input').css("border", "grey 1px solid");
    } 
    if (currentTime5 > currentTime) {
        $('#5user-input').css("background-color", "#77dd77");
        $('#5user-input').css("color", "white");
        $('#5user-input').css("border", "grey 1px solid");
    }
}


// function to be called by init(). renders saved tasks from local storage to page even if refreshing page
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

// function to be called by submitBtn. Saves tasks to local storage
function saveTask8() {
    localStorage.setItem("8", taskText8.val());
}

// function to be called by submitBtn. Saves tasks to local storage
function saveTask9() {
    localStorage.setItem("9", taskText9.val());
}

// function to be called by submitBtn. Saves tasks to local storage
function saveTask10() {
    localStorage.setItem("10", taskText10.val());
}

// function to be called by submitBtn. Saves tasks to local storage
function saveTask11() {
    localStorage.setItem("11", taskText11.val());
}

// function to be called by submitBtn. Saves tasks to local storage
function saveTask12() {
    localStorage.setItem("12", taskText12.val());
}

// function to be called by submitBtn. Saves tasks to local storage
function saveTask1() {
    localStorage.setItem("1", taskText1.val());
}

// function to be called by submitBtn. Saves tasks to local storage
function saveTask2() {
    localStorage.setItem("2", taskText2.val());
}

// function to be called by submitBtn. Saves tasks to local storage
function saveTask3() {
    localStorage.setItem("3", taskText3.val());
}

// function to be called by submitBtn. Saves tasks to local storage
function saveTask4() {
    localStorage.setItem("4", taskText4.val());
}

// function to be called by submitBtn. Saves tasks to local storage
function saveTask5() {
    localStorage.setItem("5", taskText5.val());
}

// event listener to save tasks to local storage on click
saveBtn8.on("click", function() {
    saveTask8();
})

// event listener to save tasks to local storage on click
saveBtn9.on("click", function() {
    saveTask9();
})
 
// event listener to save tasks to local storage on click
saveBtn10.on("click", function() {
    saveTask10();
})

// event listener to save tasks to local storage on click
saveBtn11.on("click", function() {
    saveTask11();
})

// event listener to save tasks to local storage on click
saveBtn12.on("click", function() {
    saveTask12();
})

// event listener to save tasks to local storage on click
saveBtn1.on("click", function() {
    saveTask1();
})

// event listener to save tasks to local storage on click
saveBtn2.on("click", function() {
    saveTask2();
})

// event listener to save tasks to local storage on click
saveBtn3.on("click", function() {
    saveTask3();
})

// event listener to save tasks to local storage on click
saveBtn4.on("click", function() {
    saveTask4();
})

// event listener to save tasks to local storage on click
saveBtn5.on("click", function() {
    saveTask5();
})

// populates each timeblock with the formatted time
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