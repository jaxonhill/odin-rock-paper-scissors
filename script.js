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

// Function to delete the outputs already on screen
// function deleteOutcome() {

// }

// Function to display text on screen
function displayOutcome(cpu_choice, outcome_text) {
    // If the dynamic class already is on the page, then just change it
    if (document.querySelector('.dynamic')) {
        comp_chose.textContent = `The computer chose: ${cpu_choice}`;
    } else {
        comp_chose = document.createElement('p');
        comp_chose.classList.add('dynamic');
        comp_chose.textContent = `The computer chose: ${cpu_choice}`;
    }

    if (document.querySelector('#w-or-l')) {
        outcome.textContent = outcome_text;
    } else {
        outcome = document.createElement('p');
        outcome.classList.add('dynamic');
        outcome.setAttribute('id', 'w-or-l');
        outcome.textContent = outcome_text;
    }

    // Select the main container
    container = document.querySelector('.container');

    // Select the make a choice paragraph
    make_choice_p = document.querySelector('#make-selection');

    // Insert both paragraphs into the DOM
    container.insertBefore(comp_chose, make_choice_p);
    container.insertBefore(outcome, make_choice_p);
}

// Function to play a round
function playRound(player_choice) {
    // Computer makes a choice here
    let comp_choice = computerPlay(choices);

    // Check that the answer is valid
    if (isValidAnswer(player_choice)) {
        // Check if they tie right here
        if (isTie(comp_choice, player_choice)) {
            displayOutcome(comp_choice, `You Tied! You both picked ${player_choice}`);
        }
        // If they do not tie, then check who wins
        else if (isUserWin(comp_choice, player_choice)) {
            displayOutcome(comp_choice, `You Win! ${player_choice} beats ${comp_choice}`);
        } else {
            displayOutcome(comp_choice, `You Lose! ${comp_choice} beats ${player_choice}`);
        }
    } else {
        // Then just continue to the next iteration and have them enter a valid choice
        displayOutcome(comp_choice, "Something went wrong.");
    }
}

// Define the choices we have
const choices = ["rock", "paper", "scissors"];

// Create a node list of buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        playRound(this.id);
    });
});
