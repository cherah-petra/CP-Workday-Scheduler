var timeContainer = document.getElementById("timeContainer")
var currentHour
var saveDescription = document.getElementsByClassName(".description");

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


//Compare current time to each container
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

//Add Save event listener

document.getElementById("hour-9").addEventListener("click", saveDescription);
document.getElementById("hour-10").addEventListener("click", saveDescription);
document.getElementById("hour-11").addEventListener("click", saveDescription);
document.getElementById("hour-12").addEventListener("click", saveDescription);
document.getElementById("hour-13").addEventListener("click", saveDescription);
document.getElementById("hour-14").addEventListener("click", saveDescription);
document.getElementById("hour-15").addEventListener("click", saveDescription);
document.getElementById("hour-16").addEventListener("click", saveDescription);
document.getElementById("hour-17").addEventListener("click", saveDescription);


const saveDescription = localStorage.getItem('saveDescription');

if (saveDescription) {
  savedTextDisplay.textContent = savedText;
}


//function localStorage() {
  //localStorage.getItem(timeContainer, saveDescription)
//}

// Wrap all code that interacts with tdhe DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //





    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

//Retrive description from local storage
