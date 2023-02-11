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
 
    var date =  new Date();
y = date.getFullYear();
m = date.getMonth() + 1;
d = date.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;
  })