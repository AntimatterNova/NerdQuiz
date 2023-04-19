// This is the list of questions, and the corresponding answers
var questionList = [{
    questionText: 'What does "var" do in a Javascript file?',
    choices: ['It assigns a value to a name', 'It changes the text in a selected HTMl element', 'It logs a selected value in the browser console',],
    trueAns: 'It assigns a value to a name',
  },
  {
    questionText: 'What is the maximum amount of values that can be stored in an array?',
    choices: ['Only five values', 'Less than one million', 'More than one billion'],
    trueAns: 'More than one billion',
  },
  {
    questionText: 'How can you select an HTML element with JavaScript?',
    choices: ['.addEventListener', '.querySelector', '.log'],
    trueAns: '.querySelector',
  },
  {
    questionText: 'Which of the options below will subtract 10 from a var?',
    choices: ['var - 10', 'var -- 10', 'var -= 10'], 
    trueAns: 'var -= 10',
  },
];

//These variables describe which HTML elements are targeted by the Javascript
var timeEl = document.querySelector('.timer');
var gameField = document.querySelector('.play-field');
var startBtn = document.querySelector('.startBtn');
var questionBox = document.querySelector('.question');
var answerBox = document.querySelector('.answers');
var scoreBox = document.querySelector('.score');
var inputField = document.querySelector('.inputField');
var highScores = [];
var curQuestion = 0;
var secLeft = 60;
var score = 0;

//This function runs when the start button is pressed in index.html
startBtn.addEventListener('click', function(event) {
  console.log('Game started');
  startBtn.remove();
  //This function sets up the timer's interval
  var timerInterval = setInterval(function() {
    
    secLeft--;
    //this prints the remaining time to the html page
    timeEl.textContent = '[Time left: ' + secLeft + ']👾👾👾[Score: ' + score + ']';
    
    //this statement checks if there's time remaining on the clock, if not, it ends the timer and goes to the game over funciton.
    if (secLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      gameOvr();
      
    };
  }, 1000);
  
  function main() {
    displayQuestion(curQuestion);
  };
  
  //this function handles the generation of the question buttons and compares the input to the correct answer
  function displayQuestion(curQuestion) {
    //checks for pre-existing buttons
    var prevBtns = document.querySelectorAll('.choiceBtn');
    if (prevBtns) {
      for (var j = 0; j < prevBtns.length; j++) {
        prevBtns[j].remove();
      };
      if (curQuestion >= questionList.length) {
        clearInterval(timerInterval);
        gameOvr();
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
        //compares input to the correct answer provided in the question array
        if (El.textContent === questionList[curQuestion].trueAns) {
          score += 10;
        } else {
          secLeft -= 10;
          return
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
  
  //this function sets up the actions to be executed when the game is considered over either by time out or if all questions have been answered
  function gameOvr() {
    timeEl.remove();
    scoreBox.remove();
    answerBox.remove();
    
    inputField.style.display = 'block';
    
    score += secLeft;
    questionBox.textContent = 'Final Score: ' + score;
    
    //This function save the user initials and score to local storage
    inputField.addEventListener('submit', function(e) {
      var finalScore = {
        name: e.target[0].value,
        score,
      };

      highScores.push(finalScore);
      window.localStorage.setItem('score', JSON.stringify(highScores));
      console.log(finalScore);
      console.log(highScores);
    });
  };
  
  
  main();
  console.log('test');
});

//this function set's the local scores to be the same as the ones in local storage.
function init() {
  highScores = JSON.parse(localStorage.getItem('score'));

  if (highScores === null) {
    highScores = [];
  };
  console.log(highScores);
}
init();