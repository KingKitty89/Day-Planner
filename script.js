//Global variables to call on
var today = moment().format('dddd, MMMM Do, YYYY');
var currentHour = moment().hour();

//Today's date at the top of page 
$("#currentDay").text(today);

$(document).ready(function () {

    colorChange();

});

//changes the color of the time-blocks based on past, present, and future 
function colorChange() {

    $(".time-block").each(function () {

        var blockHour = $(this).attr("id").split("hour-")[1];

        if (currentHour > blockHour) {

            $(this).addClass("past");

        }

        else if (currentHour < blockHour) {

            $(this).addClass("future");

        }

        else {

            $(this).addClass("present");

        }

    })
}

//save button and local storage of scheduled event
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(time, description);

    colorChange();

})

//stored value for event descriptions
$("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
$("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
$("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
$("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
$("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
$("#hour-14").children(".description").val(localStorage.getItem("hour-14"));
$("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
$("#hour-16").children(".description").val(localStorage.getItem("hour-16"));
$("#hour-17").children(".description").val(localStorage.getItem("hour-17"));






