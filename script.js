
var mainDivEl = $("#main-div");
var amount = 24;
for (var i = 1; i < 25; i++){
    var newDiv = $("<div>").addClass("row time-block").attr("id",i);
    mainDivEl.append(newDiv);
    var innerDiv = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").attr("id","hour" +i);
    
    if (i >= 12 && i < 24){
      innerDiv.html(i +"PM");
    }
    else {
      innerDiv.html(i + "AM");
    }

    newDiv.append(innerDiv);
    var textAreaEl = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", "3").attr("id","inputTime" + i);
   
    newDiv.append(textAreaEl);

    var buttonEl = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save");
    newDiv.append(buttonEl);

    var ilEl = $("<il>").addClass("fas fa-save").attr("aria-hidden", "true");
  
    buttonEl.append(ilEl);


  }

$(function () {
  

  $(".saveBtn").on("click", function(event){
    event.preventDefault();
    console.log($(this).parent().attr("id"));
    var hourClicked = $(this).parent().attr("id");
    var descriptionEl = $(this).siblings(".description").val();
    
    var storeMessage = localStorage.setItem(hourClicked, descriptionEl);
  })
   

  function dynamicHour() {
    var currentHour =  dayjs().hour();

    $("#inputTime"+currentHour).addClass("present").removeClass("past future");
   
    for (var i = 1; i < currentHour; i++) {
      $("#inputTime"+i).addClass("past").removeClass("present future");;
    } 
    for (var i = currentHour+1; i <= 24; i++) {
      $("#inputTime"+i).addClass("future").removeClass("past present");
    } 
  }
  setInterval(dynamicHour 
    ,1000);

    dynamicHour();

  
  for (var i =1; i <25; i++){
    var getValue = localStorage.getItem(i);

    if (getValue != null) {
      $("#inputTime" +i).text(getValue.value);
    }
  }
 
  var todaysDate = dayjs().format('dddd, MMMM D, YYYY');
  var dateEl = $("#currentDay");
  dateEl.text(todaysDate);
});
