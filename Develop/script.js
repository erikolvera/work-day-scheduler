// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var btn = $('.saveBtn');
$(document).ready(function() {

  btn.on('click',function(event) {
    var timeBlockId = $(this).attr('id')
    var task = $(this).siblings('.description').val()
    localStorage.setItem(timeBlockId, task)
    console.log('This is my task:', task)
    produceTask()
  })
  //return tasks to the page
  produceTask()
  function produceTask() {
    for(var i=9; i < 18; i++) {
      var task = localStorage.getItem(i)
      $('#'+ i + '').text(task)

    }
  }
})





$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
// });


    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    // function hourUpdate() {
    //   var currentHour = dayjs().hour()
    //   $( ".time-block" ).each(function() {
      // var myHour = parseInt($(this).attr("id").split("-")[1])
      // console.log(myHour)
    //   if (myHour < currentHour) {
    //     console.log("past")
    //   } else if (myHour === currentHour) {
    //     console.log("present")
    //   } else (myHour > currentHour)
    //   });
    // }

    
    var currentHour = dayjs().hour()
    console.log(currentHour)
//
    
    function applyStyle(){
      $( ".row" ).each(function() {
        var assignedTime = parseInt($(this).attr('id').split('-')[1])
        if (assignedTime < currentHour) {
          // setAttribute('class', '.past');
          $(this).addClass('past')
        } else if (assignedTime === currentHour) {
          // setAttribute('class', '.present');
          $(this).addClass('present')
        } else if (assignedTime > currentHour) {
          // setAttribute('class', '.future');
          $(this).addClass('future')
        }
      
      });
    } 
    applyStyle()
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    
    //
    // TODO: Add code to display the current date in the header of the page.
    var date =  new Date();
y = date.getFullYear();
m = date.getMonth() + 1;
d = date.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;
  })