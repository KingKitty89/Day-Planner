var today = moment().format('dddd, MMMM Do, YYYY');
console.log(today);
$("#currentDay").text(today);

$(document).ready(function () {

    colorChange();
   

});


function colorChange() {
    var currentHour = moment().hour();
    console.log(currentHour);

    $(".time-block").each(function () {

        var blockHour = $(this).attr("id").split("hour-")[1];
        console.log(blockHour);

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



$(".saveBtn").on("click", function () {
    event.preventDefault();
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
   

    localStorage.setItem(time, description);
    console.log(description, time);

 
    
    colorChange();
    

})

$("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
$("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
$("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
$("#hour-12").children(".description").val(localStorage.getItem("hour-12"));    
$("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
$("#hour-14").children(".description").val(localStorage.getItem("hour-14"));    
$("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
$("#hour-16").children(".description").val(localStorage.getItem("hour-16"));    
$("#hour-17").children(".description").val(localStorage.getItem("hour-17"));      


    
    //$(".time-block").each(function () {
    //var inputText = $(this).children(".description").val();
    //JSON.parse(localStorage.getItem(inputText));
    //console.log(inputText);
    
    
    //$(".description").val("");
    //$(".description").val(inputText);
        
    //}

//)//};

//My random notes

//To clear ?????
//if (currentTime >=0 && currentTime < 9){
    //localStorage.clear();
  //}

//  CHANGE INPUT BOX COLOR BASED ON TIME OF DAY

//var currentTime = moment();
//console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

//var currentHour = parseInt(moment().hours());
//console.log(currentHour);



//open planner -->

//display currentDay using momemt.js-->

//Timeblocks should show stacked on top of eachother and should have corresponding times. Each block should be an hour from 9AM-5PM. -->

//Timeblock should have a button next to it to save stored event text. (local storage) -->

//When looking at timeblocks for that day each timeblock is color coded to indicate whether it is in the past (grey), present (red), or future (green). -->

//Timeblocks can be clicked on. When you click you should be able to enter text for an event you might plan. -->

//when page is refreshed the events should be in the planner still.

//https://vanderbilt.bootcampcontent.com/vanderbilt_coding_bootcamp/vu-nsh-fsf-ft-05-2020-u-c/-/raw/master/05-Third-Party-APIs/02-HomeworkAssets/05-third-party-apis-homework-demo.gif-->

