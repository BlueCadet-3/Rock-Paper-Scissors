/* Initialize variables */ 

let user = {
  currentChoice: null,
  Score: 0
};
let cpu = {
  currentChoice: null,
  Score: 0
};

let userChoice = user.currentChoice

let userScore = 0;
let cpuScore = 0;

const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('cpu-score');

const scoreboard_section = document.querySelector('scoreboard');
const result_section = document.getElementById('result');

const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scissors_button = document.getElementById('scissors');

const choices = ["Rock", "Paper", "Scissors"];

/* User choice */

function choice(userChoice) {
  user.currentChoice = userChoice;
}

function selection() {

rock_button.addEventListener('click', function() {
  choice(choices[0]);
  cpuChooses();
  compareChoices();
});

paper_button.addEventListener('click', function() {
  choice(choices[1]);
  cpuChooses();
  compareChoices();
});

scissors_button.addEventListener('click', function () {
  choice(choices[2]);
  cpuChooses();
  compareChoices();
});
}

/* Randomize CPU choice */

function cpuChooses(cpuChoice){
  const randomIndex = Math.floor(Math.random() * choices.length);
  cpu.currentChoice = choices[randomIndex];
}

/* Game outcomes */

function win() {
  user.Score++;
  userScore_span.innerHTML = user.Score;
}

function lose() {
  cpu.Score++;
  cpuScore_span.innerHTML = cpu.Score;
}

  /* User chooses rock */

function compareChoices() {
  if (user.currentChoice === choices[0] && cpu.currentChoice === choices[0]) {
    result_section.innerHTML = "Draw!";
  } else if (user.currentChoice === choices[0] && cpu.currentChoice === choices[1]) {
    lose(),
    result_section.innerHTML = user.currentChoice + " gets covered by " + choices[1] + "...you lose!";
  } else if (user.currentChoice === choices[0] && cpu.currentChoice === choices[2]) {
    win(),
    result_section.innerHTML = user.currentChoice + " smashes " + choices[2] + "...you win!";
  }
  
  /* User chooses paper */
  
  if (user.currentChoice === choices[1] && cpu.currentChoice === choices[0]) {
    win(),
    result_section.innerHTML = user.currentChoice + " is covered by " + cpu.currentChoice + "...you win!";
  } else if (user.currentChoice === choices[1] && cpu.currentChoice === choices[1]) {
    result_section.innerHTML = "Draw!";
  } else if (user.currentChoice === choices[1] && cpu.currentChoice === choices[2]) {
    lose(),
    result_section.innerHTML = user.currentChoice + " gets cut by " + cpu.currentChoice + "...you lose!";
  }
  
    /* User chooses scissors */ 
  
  if (user.currentChoice === choices[2] && cpu.currentChoice === choices[0]) {
    lose(),
    result_section.innerHTML = user.currentChoice + " get smashed by " + cpu.currentChoice + "...you lose!";
  } else if (user.currentChoice === choices[2] && cpu.currentChoice === choices[1]) {
    win(),
    result_section.innerHTML = user.currentChoice + " cuts " + cpu.currentChoice + "...you win!";
  } else if (user.currentChoice === choices[2] && cpu.currentChoice === choices[2]) {
    result_section.innerHTML = "Draw!";
  }
}

/* Run */

selection();