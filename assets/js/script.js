var questionList = [{
    questionText: 'What does "var" do in a Javascript file?',
    choices: ['It assigns a value to a name', 'It changes the text in a selected HTMl element', 'It logs a selected value in the browser console',],
    trueAns: 'It assigns a value to a name',
  },
  {
    questionText: '',
    choices: ['sakdhgf', 'ASDHGF', 'kjahsdgf'],
    trueAns: 'ASDHGF',
  },
  {
    questionText: '',
    choices: [],
    trueAns: '',
  },
  {
    questionText: '',
    choices: [],
    trueAns: '',
  },
];

var timeEl = document.querySelector('.timer');
var gameField = document.querySelector('.play-field');
var startBtn = document.querySelector('.startBtn');
var questionBox = document.querySelector('.question');
var answerBox = document.querySelector('.answers');
var scoreBox = document.querySelector('.score');
var curQuestion = 0;
var secLeft = 60;
var score = 0;

startBtn.addEventListener('click', function(event) {
  console.log('Game started');
  startBtn.remove();
  
  var timerInterval = setInterval(function() {

    secLeft--;
    timeEl.textContent = 'Time left: ' + secLeft;

    if(secLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      };
  }, 1000);

  function main() {
    displayQuestion(curQuestion);
  };

  function displayQuestion(curQuestion) {
    //checks for pre-existing buttons
    var prevBtns = document.querySelectorAll('.choiceBtn');
    if (prevBtns) {
      for (var j = 0; j < prevBtns.length; j++) {
        prevBtns[j].remove();
      };
    };

    questionBox.textContent = questionList[curQuestion].questionText;
    
    for (var i = 0; i < questionList[curQuestion].choices.length; i++) {
      var choiceBtn = document.createElement('button');
      choiceBtn.classList.add('choiceBtn');
      choiceBtn.textContent = questionList[curQuestion].choices[i];
      answerBox.append(choiceBtn);

      choiceBtn.addEventListener('click', function(e) {
        var El = e.target;
        if (El.textContent === questionList[curQuestion].trueAns) {
          score += 10;
        } else {
          secLeft -= 5;
          return
        };
  
        if (curQuestion < questionList.length) {
          curQuestion++;
          displayQuestion(curQuestion);
        };
      });
    };
  };

  main();
  console.log('test');
});