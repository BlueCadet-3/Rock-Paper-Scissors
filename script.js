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
const result_section = document.querySelector('result');

const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scissors_button = document.getElementById('scissors');

const choices = ["Rock", "Paper", "Scissors"];

/* User choice */

function choice(userChoice) {
  console.log("The user chose " + userChoice)
}

function selection() {
rock_button.addEventListener('click', function() {
  choice(choices[0]);
});

paper_button.addEventListener('click', function() {
  choice(choices[1]);
});

scissors_button.addEventListener('click', function () {
  choice(choices[2]);
});
}

/* Randomize CPU choice */

function cpuChooses(){
  const randomIndex = Math.floor(Math.random() * choices.length);
  cpu.currentChoice = choices[randomIndex];
}

/* Game outcomes */

function game() {
/* User chooses rock */
  
  if (user.currentChoice === choices[0] && cpu.currentChoice === choices[0]) {
    console.log("Draw!");
  } else if (user.currentChoice === choices[0] && cpu.currentChoice === choices[1]) {
    console.log(user.currentChoice + " gets covered by " + choices[1] + "...you lose!");
  } else if (user.currentChoice === choices[0] && cpu.currentChoice === choices[2]) {
    console.log(user.currentChoice + " smashes " + choices[2] + "...you win!");
  }
  
    /* User chooses paper */
  
  if (user.currentChoice === choices[1] && cpu.currentChoice === choices[0]) {
    console.log(user.currentChoice + " is covered by" + cpu.currentChoice + "...you win!");
  } else if (user.currentChoice === choices[1] && cpu.currentChoice === choices[1]) {
    console.log("Draw!");
  } else if (user.currentChoice === choices[1] && cpu.currentChoice === choices[2]) {
    console.log(user.currentChoice + " gets cut by " + cpu.currentChoice + "...you lose!");
  }
  
    /* User chooses scissors */ 
  
  if (user.currentChoice === choices[2] && cpu.currentChoice === choices[0]) {
    console.log(user.currentChoice + " get smashed by " + cpu.currentChoice + "...you lose!");
  } else if (user.currentChoice === choices[2] && cpu.currentChoice === choices[1]) {
    console.log(user.currentChoice + " cuts " + cpu.currentChoice + "...you win!");
  } else if (user.currentChoice === choices[2] && cpu.currentChoice === choices[2]) {
    console.log("Draw!");
  }
}

/* Outputs */


selection();
document.querySelectorAll('button').onclick = cpuChooses();


console.log("The user chose " + user.currentChoice);
console.log("The computer chose " + cpu.currentChoice);