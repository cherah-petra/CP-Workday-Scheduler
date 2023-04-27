var currentHour
var saveDescription = document.getElementsByClassName("description");

//Current time and day
$(document).ready(function () {
  var today = dayjs().format('dddd, MMMM DD YYYY')
  $("#currentDay").text(today);
  var currentHour = dayjs().hour();
  console.log(currentHour);



//split time from hour ID for comparison

$(".time-block").each(function () {
  var timeContainer = parseInt($(this).attr('id').split('hour-')[1]);
  console.log(timeContainer);


//Compare current time to each container and assign correct class

if (timeContainer < currentHour) {
  $(this).removeClass("future");
  $(this).removeClass("present");
  $(this).addClass("past");
}

else if (timeContainer > currentHour) {
  $(this).removeClass("past");
  $(this).removeClass("present");
  $(this).addClass("future");
}

else if (timeContainer === currentHour) {
  $(this).removeClass("future");
  $(this).removeClass("past");
  $(this).addClass("present");
}
});
});

 // saves value to local storage on click

$(".saveBtn").click(function (event) {
  event.preventDefault();
  $(".description").each(function () {
    var value = $(this).val();
    var timeContainer = $(this).parent().attr("id");
    localStorage.setItem(timeContainer, value);
  });
});

//get value for each container

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


//retrieves items from local storage and sets them in proper places
$(".time-block").each(function () {
  var timeContainer = $(this).parent().attr("id");
  $(this).val(localStorage.getItem(timeContainer, ".description"));
});