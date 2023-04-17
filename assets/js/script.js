var questionList = [{
    questionText: 'What does "var" do in a Javascript file?',
    choices: ['It assigns a value to a name', 'It changes the text in a selected HTMl element', 'It logs a selected value in the browser console',],
    trueAns: 'It assigns a value to a name',
  },
  {
    questionText: '1 A',
    choices: ['A', 'B', 'C'],
    trueAns: 'A',
  },
  {
    questionText: '2 B',
    choices: ['A', 'B', 'C'],
    trueAns: 'B',
  },
  {
    questionText: '3 C',
    choices: ['A', 'B', 'C'], 
    trueAns: 'C',
  },
];

var timeEl = document.querySelector('.timer');
var gameField = document.querySelector('.play-field');
var startBtn = document.querySelector('.startBtn');
var questionBox = document.querySelector('.question');
var answerBox = document.querySelector('.answers');
var scoreBox = document.querySelector('.score');
var inputField = document.querySelector('.inputField');
var initialsInput = document.querySelector('#initialsInput');
var curQuestion = 0;
var secLeft = 120;
var score = 0;

startBtn.addEventListener('click', function(event) {
  console.log('Game started');
  startBtn.remove();
  
  var timerInterval = setInterval(function() {

    secLeft--;
    timeEl.textContent = '[Time left: ' + secLeft + ']👾👾👾[Score: ' + score + ']';

    if (secLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      gameOvr();

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
          secLeft -= 10;
          return
        };
  
        if (curQuestion < questionList.length) {
          clearInterval(timerInterval);
          gameOvr();
        };

        if (curQuestion < questionList.length) {
          curQuestion++;
          displayQuestion(curQuestion);
        } else {
          console.log(out);
        };
      });
    };
  };

  function gameOvr() {
    timeEl.remove();
    scoreBox.remove();
    answerBox.remove();

    inputField.style.display = 'block';

    score -= secLeft;
    localStorage.setItem('score', score);
    questionBox.textContent = 'Final Score: ' + score;
  };

  main();
  console.log('test');
});