let userScore = 0;
let comScore = 0;

let selections = {
  'rock': {
    'rock' : 'Draw',
    'paper' : 'Lose',
    'scissor' : 'Win'
  },
  'paper': {
    'rock' : 'Win',
    'paper' : 'Draw',
    'scissor' : 'Lose'
  },
  'scissor': {
    'rock': 'Lose',
    'paper': 'Win',
    'scissor': 'Draw'
  }  
}


let choiceObject = {
  'rock':'🪨',
  'paper':'📜',
  'scissor':'✂️'
}


function checker(input) {
  let choices = ['rock','paper','scissor'];
  
  //Generate COM choice
  let generateNum = Math.floor(Math.random()*3);
  let compChoice = choices[generateNum];

  let resultContainer = document.getElementById('result')
  switch(selections[input][compChoice]) {
    case 'Win':
      resultContainer.innerHTML = 'You chose ' + choiceObject[input] + ' and COM chose ' + choiceObject[compChoice] + '. You Win!🎉';
      userScore++
      break;
    case 'Lose':
      resultContainer.innerHTML = 'You chose ' + choiceObject[input] + ' and COM chose ' + choiceObject[compChoice] + '. You Lose!😥';
      comScore++
      break;
    default:
      resultContainer.innerHTML = 'You chose ' + choiceObject[input] + ' and COM chose ' + choiceObject[compChoice] + '. Draw!';
      break;
  }

  let userScoreDisplay = document.getElementById('userDisplay'),
    comScoreDisplay = document.getElementById('comDisplay');
  userScoreDisplay.innerHTML = userScore;
  comScoreDisplay.innerHTML = comScore;
}