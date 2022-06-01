// This will get a random integer from 0-whatever number
function getRandomInt(max_num) {
    return Math.floor(Math.random() * max_num);
}


// Function to have the computer make a choice
function computerPlay(comp_choices) {
    return comp_choices[getRandomInt(comp_choices.length)];
}


// Function to see if the user entered a valid answer
function isValidAnswer(user_choice) {
    return (choices.indexOf(user_choice) > -1);
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

    // Check that the answer is valid
    if (isValidAnswer(player_choice)) {
        console.log("That's a valid answer.");
    } else {
        // Then just continue to the next iteration and have them enter a valid choice
        alert("Not a valid answer. Please type a new answer.")
    }
}