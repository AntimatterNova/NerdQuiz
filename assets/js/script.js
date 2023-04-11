var timeEl = document.querySelector(".timer");
var gameField = document.querySelector(".play-field");
var startBtn = document.querySelector(".startBtn");
var question = document.querySelector(".question");

var secondsLeft = 120;

// startBtn.addEventListener('click', function setTime() {
//     console.log('button was pressed');

//     var timerInterval = setInterval(function() {

//       secondsLeft--;
//       timeEl.textContent = 'Time left: ' + secondsLeft;
  
//       if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         // Calls function to create and append image
//         };
//     }, 1000);
// });

startBtn.addEventListener('click', function(event) {
    console.log('Game started');
    event.stopPropagation();

    startBtn.remove();
    

    var timerInterval = setInterval(function() {

      secondsLeft--;
      timeEl.textContent = 'Time left: ' + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        };
    }, 1000);
});