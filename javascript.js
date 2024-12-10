let human_score = 0;
let computer_score = 0;

function getComputerChoice () {
    rand = Math.random();
    rounded_rand = parseFloat(rand.toFixed(2)); //Rounding float to 2 decimal digits and converting string to number

    if(0<rounded_rand && rounded_rand<=0.33) return "rock";
    else if (0.33<rounded_rand && rounded_rand<=0.66) return "paper";
    else return "scissors";
}


function getHumanChoice () {
    choice = (prompt("Enter rock, paper or scissors: ")).toLowerCase();
    if(choice == "rock" || choice == "paper" || choice == "scissors") return choice;
    else {
    console.log(("Incorrect choice, pick rock, paper or scissors"));
    return getHumanChoice();
    }
}

function playRound(human_choice, computer_choice) {
    if (human_choice == "rock" && computer_choice == "paper") {
        console.log("You Lose! Paper beats rock");
        computer_score++;
    }
    else if (human_choice == "paper" && computer_choice == "scissors") {
        console.log("You Lose! Scissors beats paper");
        computer_score++;
    }
    else if (human_choice == "scissors" && computer_choice == "rock") {
        console.log("You Lose! Rock beats scissors");
        computer_score++;
    }
    else if (human_choice==computer_choice) {
        console.log(`Both played ${human_choice}`);
    }
    else {
        console.log(`You win! ${human_choice} beats ${computer_choice}`);
        human_score++;
    }
    console.log(`Score: You ${human_score} Computer ${computer_score}`);
}

function playGame () {
    let count = 0;

    while (count<5) {
        computer_choice = getComputerChoice();
        human_choice = getHumanChoice();
        playRound(human_choice, computer_choice);
        count++;
    }
}

playGame();