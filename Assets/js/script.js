function dateTime() {
var currentDateTime = moment();
$("#currentDay").text(currentDateTime.format("MMMM Do YYYY, h:mm:ss a"));
}

setInterval(dateTime, 1000);

var containerEl = $(".container");
containerEl.css({"display": "flex", "flex-wrap": "wrap"});

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

