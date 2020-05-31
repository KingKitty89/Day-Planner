

$(document).ready(function () {

    var today = moment().format('dddd, MMMM Do, YYYY');
    console.log(today);
    $("#currentDay").text(today);

    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var description = $(this).siblings(".description").val();
        console.log(description, time)

        localStorage.setItem(time, description);
        
   
    })

        var currentHour = moment().hour();
        console.log(currentHour);
        
        $(".time-block").each(function () {     
       
        var blockHour = parseInt($(this).siblings().attr("id").split("hour")[1]);
       
       
        console.log(blockHour, currentHour);


        if (blockHour < currentHour){
            $(this).addClass("past");
            
        }

        if (blockHour === currentHour){
            $(this).addClass("present");
        }

        else {
            $(this).addClass("future");
        }
    
       })
  
    
});


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

