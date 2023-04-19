//everything in this file handles rendering the score on the scoreboard.html page
var scoreboard = document.querySelector('.score-board');
var score = JSON.parse(localStorage.getItem('score'));
var clrBtn = document.querySelector('#clrScore');

for (var i = 0; i < score.length; i++) {
    var scoreLi = document.createElement('li');

    scoreLi.textContent = score[i].name + '-' + score[i].score;
    console.log(score[i].name);
    scoreboard.appendChild(scoreLi);
}

clrBtn.addEventListener('click', function() {
    while (scoreboard.hasChildNodes()) {
        scoreboard.removeChild(scoreboard.firstChild);
    }
    window.localStorage.setItem('score', JSON.stringify([]));
});