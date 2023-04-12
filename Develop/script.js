// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var mainDivEl = $("#main-div");

var amount = 24;
for (var i = 1; i < 25; i++){
    var newDiv = $("<div>").addClass("row time-block future").attr("id",i);
    mainDivEl.append(newDiv);
    console.log("This is repeat " + i);
    console.log(newDiv);
    var innerDiv = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").attr("id",i +"");
    
    if (i >= 12 && i < 24){
      innerDiv.html(i +"PM");
    }
    else {
      innerDiv.html(i + "AM");
    }

    newDiv.append(innerDiv);
    var textAreaEl = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", "3");
    newDiv.append(textAreaEl);

    var buttonEl = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save");
    newDiv.append(buttonEl);

    var ilEl = $("<il>").addClass("fas fa-save").attr("aria-hidden", "true");
  
    buttonEl.append(ilEl);

  }

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  $(".saveBtn").on("click", function(event){
    event.preventDefault();
    console.log($(this).parent().attr("id"));
    var hourClicked = $(this).parent().attr("id");
    var descriptionEl = $(this).siblings(".description").val();
    console.log(descriptionEl);
    var storeMessage = localStorage.setItem(hourClicked, descriptionEl);
    console.log(storeMessage);
  })
   


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  var currentHour = dayjs().hour();
  var currentTimeBlockId = newDiv.id.value;
  console.log(currentTimeBlockId);

 

  // if (currentHour === currentTimeBlockId) {
  //   newDiv.addClass("present");
  //   console.log("the current hour is: " +currentHour);
  //   console.log("the current time is: " + currentTimeBlockId)
  // }

  // else if (currentHour < currentTimeBlockId) {
  //   newDiv.addClass("future");
  // }

  // else {
  //   newDiv.addClass("past");
  // }

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
