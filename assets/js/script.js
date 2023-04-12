var questionList = [{
    questionText: 'What does "var" do in a Javascript file?',
    choices: ['It assigns a value to a name', 'It changes the text in a selected HTMl element', 'It logs a selected value in the browser console',],
    trueAns: 'It assigns a value to a name',
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
var curQuestion = 0;
var secLeft = 60;
var score = 0;

// function main() {
//   questionBox.textContent = questionList[0].questionText;

//   for (var i = 0; i < questionList[0].choices.length; i++) {
//     var genButton = document.createElement('button');
//     genButton.textContent = questionList[0].choices[i];
//     answerBox.append(genButton);
//   };

//   if (genButton.textContent = questionList[].trueAns) {
//     score + 10;
//   } else {
//     secLeft - 5;
//   };
//   console.log(secLeft);
// };

// main();
// console.log('test');


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
    questionBox.textContent = questionList[0].questionText;
    
    var x = curQuestion;
    var choice = document.querySelector('button');

    for (var i = 0; i < questionList[x].choices.length; i++) {
      var genButton = document.createElement('button');
      genButton.textContent = questionList[x].choices[i];
      answerBox.append(genButton);
    };
  
    // if (choice.contains(questionList[x].trueAns)) {
    //   score + 10;
    // } else {
    //   secLeft - 5;
    // };

    // if (curQuestion <= questionList.length) {
    //   curQuestion++;
    // };
  };

  main();
  console.log('test');
});