var scoreboard = document.querySelector('.score-board');
var score = JSON.parse(localStorage.getItem('score'));

for (var i = 0; i < score.length; i++) {
    scoreboard.textContent = score[i].name + '-' + score[i].score;
    console.log(score[i].name);
};