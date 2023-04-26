var currentHour

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

//retrieves items from local storage and sets them in proper places
$(".time-block").each(function () {
  var timeContainer = $(this).parent().attr("id");
  $(this).val(localStorage.getItem(timeContainer));
});