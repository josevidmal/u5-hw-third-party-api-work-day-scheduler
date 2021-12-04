function dateTime() {
var currentDateTime = moment();
$("#currentDay").text(currentDateTime.format("MMMM Do YYYY, h:mm:ss a"));
}

setInterval(dateTime, 1000);

