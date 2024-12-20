let human_score = 0;
let computer_score = 0;

const human_score_ui = document.querySelector("#human-score");
human_score_ui.textContent = `Human Score: ${human_score}`;

const computer_score_ui = document.querySelector('#computer-score');
computer_score_ui.textContent = `Computer Score: ${computer_score}`;

const computer_choice_ui = document.querySelector("#computer-choice");

const round_result = document.querySelector('#round-result');

const game_result = document.querySelector('#game-result');

function getComputerChoice () {
    rand = Math.random();
    rounded_rand = parseFloat(rand.toFixed(2)); //Rounding float to 2 decimal digits and converting string to number

    if(0<rounded_rand && rounded_rand<=0.33) return "rock";
    else if (0.33<rounded_rand && rounded_rand<=0.66) return "paper";
    else return "scissors";
}


function playRound(human_choice, computer_choice) {
    if (human_choice == "rock" && computer_choice == "paper") {
        console.log("You Lose! Paper beats rock");
        round_result.textContent = "You Lose! Paper beats rock";
        computer_score++;
    }
    else if (human_choice == "paper" && computer_choice == "scissors") {
        console.log("You Lose! Scissors beats paper");
        round_result.textContent = "You Lose! Scissors beats paper";
        computer_score++;
    }
    else if (human_choice == "scissors" && computer_choice == "rock") {
        console.log("You Lose! Rock beats scissors");
        round_result.textContent = "You Lose! Rock beats scissors";
        computer_score++;
    }
    else if (human_choice==computer_choice) {
        console.log(`Both played ${human_choice}`);
        round_result.textContent = `Both played ${human_choice}`;
    }
    else {
        console.log(`You win! ${human_choice} beats ${computer_choice}`);
        round_result.textContent = `You win! ${human_choice} beats ${computer_choice}`;
        human_score++;
    }
    console.log(`Score: You ${human_score} Computer ${computer_score}`);
    computer_score_ui.textContent = `Computer Score: ${computer_score}`;
    human_score_ui.textContent = `Human Score: ${human_score}`;
}

function game_reset()
{
    computer_score = 0;
    human_score = 0;
    human_score_ui.textContent = 0;
    computer_score_ui.textContent = 0;
    computer_choice_ui.textContent = "";
    round_result.textContent = "";
    game_result.textContent = "";
}

const container = document.querySelector(".choices"); 

container.addEventListener("click", (event) => {


    if(event.target.tagName === 'BUTTON')
    {
        if (human_score == 5 || computer_score ==5)
        {
            game_reset();
        }

        let humanChoice = event.target.id;

        let computer_choice = getComputerChoice();

        computer_choice_ui.textContent = `Computer Choice: ${computer_choice}`;

        playRound(humanChoice, computer_choice);

        if (human_score == 5 || computer_score ==5)
        {
            if (human_score == 5) game_result.textContent = "Congratulations! You won the game";
            else game_result.textContent = "Better luck next time, you lost the game";
        }
    }
})