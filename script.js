// This will get a random integer from 0-whatever number
function getRandomInt(max_num) {
    return Math.floor(Math.random() * max_num);
}


// Function to have the computer make a choice
function computerPlay(comp_choices) {
    return comp_choices[getRandomInt(comp_choices.length)];
}


// Function to figure out who wins the round based on a choice
// function isUserWin(cpu_choice, user_choice)


// function playRound(isPlayerWin) {

// }


// Define the choices we have
const choices = ["rock", "paper", "scissors"];

for (let i = 0; i <= 5; i++) {

    // Computer makes a choice here
    let comp_choice = computerPlay(choices);

    // Prompt the user to make a choice of either rock, paper, or scissors
    let player_choice = prompt("Type your choice.\nRock, Paper, or Scissors?").toLowerCase();
    let valid_answer;

    // Use switch case statement with cases as the choices
    switch (player_choice.toLowerCase()) {
        case "rock":
        case "paper":
        case "scissors":
            console.log(`Computer's Choice: ${comp_choice}\nPlayer's Choice: ${player_choice}`);
            // isUserWin(comp_choice, player_choice);
            break;
        default:
            valid_answer = false;
            console.log("You did not enter a valid choice.");
    }

    // If it is not a valid answer, then just continue to next iteration and have them choose again
    if (valid_answer === false) {
        continue;
    }

    console.log("That was a valid answer");
}