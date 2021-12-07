// Function to set date and time with moment.js
function dateTime() {
    var currentDateTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDateTime);
}

setInterval(dateTime, 1000);

var containerEl = $(".container");
containerEl.css({"display": "flex", "flex-wrap": "wrap"});

// Hours array to use in for loop
var hours = [
    "9AM", 
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
];

// For loop to create html elements for timeblocks using jQuery
for (var i = 0; i < hours.length; i++) {
    var timeblock = $("<div>");
    timeblock.addClass("input-group time-block row");
    timeblock.attr("data-time", [i]);
    containerEl.append(timeblock);

    var time = $("<span>");
    time.addClass("description hour");
    time.text(hours[i]);
    time.css({"flex": "0 0 10%"});
    timeblock.append(time);

    var textArea = $("<textarea>");
    textArea.addClass("form-control");
    textArea.attr({"id": "text-" + hours[i], "aria-label": "With textarea"});
    textArea.css({"flex": "0 0 80%"});
    timeblock.append(textArea);

    var saveBtn = $("<button>");
    saveBtn.addClass("btn btn-info saveBtn");
    saveBtn.attr({"id": "btn-" + hours[i], "type": "button"});
    saveBtn.css({"flex": "0 0 10%"});
    timeblock.append(saveBtn);

    var btnIcon = $("<i>");
    btnIcon.addClass("fas fa-save");
    saveBtn.append(btnIcon);
}

// Click events for each timeblock button, with functions to set items in local storage
// and get them when the page is reloaded
var saveBtn9AM = $("#btn-9AM");
var text9AM = $("#text-9AM");

text9AM.val(localStorage.getItem("9AM"));

saveBtn9AM.on("click", function() {

    var newTask9AM = text9AM.val();

    localStorage.setItem("9AM", newTask9AM);
});

var saveBtn10AM = $("#btn-10AM");
var text10AM = $("#text-10AM");

text10AM.val(localStorage.getItem("10AM"));

saveBtn10AM.on("click", function() {

    var newTask10AM = text10AM.val();

    localStorage.setItem("10AM", newTask10AM);
});

var saveBtn11AM = $("#btn-11AM");
var text11AM = $("#text-11AM");

text11AM.val(localStorage.getItem("11AM"));

saveBtn11AM.on("click", function() {

    var newTask11AM = text11AM.val();

    localStorage.setItem("11AM", newTask11AM);
});

var saveBtn12PM = $("#btn-12PM");
var text12PM = $("#text-12PM");

text12PM.val(localStorage.getItem("12PM"));

saveBtn12PM.on("click", function() {

    var newTask12PM = text12PM.val();

    localStorage.setItem("12PM", newTask12PM);
});

var saveBtn1PM = $("#btn-1PM");
var text1PM = $("#text-1PM");

text1PM.val(localStorage.getItem("1PM"));

saveBtn1PM.on("click", function() {

    var newTask1PM = text1PM.val();

    localStorage.setItem("1PM", newTask1PM);
});

var saveBtn2PM = $("#btn-2PM");
var text2PM = $("#text-2PM");

text2PM.val(localStorage.getItem("2PM"));

saveBtn2PM.on("click", function() {

    var newTask2PM = text2PM.val();

    localStorage.setItem("2PM", newTask2PM);
});

var saveBtn3PM = $("#btn-3PM");
var text3PM = $("#text-3PM");

text3PM.val(localStorage.getItem("3PM"));

saveBtn3PM.on("click", function() {

    var newTask3PM = text3PM.val();

    localStorage.setItem("3PM", newTask3PM);
});

var saveBtn4PM = $("#btn-4PM");
var text4PM = $("#text-4PM");

text4PM.val(localStorage.getItem("4PM"));

saveBtn4PM.on("click", function() {

    var newTask4PM = text4PM.val();

    localStorage.setItem("4PM", newTask4PM);
});

var saveBtn5PM = $("#btn-5PM");
var text5PM = $("#text-5PM");

text5PM.val(localStorage.getItem("5PM"));

saveBtn5PM.on("click", function() {

    var newTask5PM = text5PM.val();

    localStorage.setItem("5PM", newTask5PM);
});

// Times array to use in for loop 
    var timesArr = [
        "09:00:00 am",
        "10:00:00 am",
        "11:00:00 am",
        "12:00:00 pm",
        "01:00:00 pm",
        "02:00:00 pm",
        "03:00:00 pm",
        "04:00:00 pm",
        "05:00:00 pm",
        "06:00:00 pm"
    ];

// For loop with moments.js and jQuery to set color code for past, present and future timeblocks
    for (var i = 0; i < timesArr.length; i++) {
        var currentTime = moment();
        var times = moment(timesArr[i], "hh:mm:ss a");
        var text = $("#text-" + hours[i]);

        if (currentTime.isAfter(times)) {
            text.addClass("past");
        } if ((currentTime.isSameOrAfter(times)) && (currentTime.isBefore(moment(timesArr[i + 1], "hh:mm:ss a")))) {
            text.addClass("present");
        } if (currentTime.isBefore(times)) {
            text.addClass("future");
        }
    };