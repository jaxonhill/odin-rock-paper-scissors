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
function isUserWin(cpu_choice, user_choice) {
    switch (user_choice) {
        // If the user chose rock
        case "rock":
            // Then they win against scissors
            if (cpu_choice === "scissors") {
                return true;
            }
            // But lose against paper
            if (cpu_choice === "paper") {
                return false;
            }

        // If the user chose paper
        case "paper":
            // Then they win against rock
            if (cpu_choice === "rock") {
                return true;
            }
            // But lose against scissors
            if (cpu_choice === "scissors") {
                return false;
            }

        // If the user chose scissors
        case "scissors":
            // Then they win against paper
            if (cpu_choice === "paper") {
                return true;
            }
            // But lose against rock
            if (cpu_choice === "rock") {
                return false;
            }
    }
}


// Function to see if they tie
function isTie(cpu_choice, user_choice) {
    if (cpu_choice === user_choice) {
        return true;
    } else {
        return false;
    }
}


// Define the choices we have
const choices = ["rock", "paper", "scissors"];

for (let i = 0; i <= 5; i++) {

    // Computer makes a choice here
    let comp_choice = computerPlay(choices);

    // Prompt the user to make a choice of either rock, paper, or scissors
    let player_choice = prompt("Type your choice.\nRock, Paper, or Scissors?").toLowerCase();

    // Check that the answer is valid
    if (isValidAnswer(player_choice)) {
        // Check if they tie right here
        if (isTie(comp_choice, player_choice)) {
            alert(`You Tied! You both picked ${player_choice}`);
        }
        // If they do not tie, then check who wins
        else if (isUserWin(comp_choice, player_choice)) {
            alert(`You Win! ${player_choice} beats ${comp_choice}`);
        } else {
            alert(`You Lose! ${comp_choice} beats ${player_choice}`);
        }
    } else {
        // Then just continue to the next iteration and have them enter a valid choice
        alert("Not a valid answer. Please type a new answer.");
    }
}

