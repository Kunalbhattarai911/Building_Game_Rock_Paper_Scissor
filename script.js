let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const generateComputerChoice = () => {
    const options = ["Rock","Paper","Scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "game was draw. play again!"
    msg.style.backgroundColor = "#081B31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `you win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `you lost!  ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const PlayGame = (userChoice) => {
    //generate user choice
    console.log("user choice = ", userChoice);
    //generate computer choice
    const computerChoice = generateComputerChoice();
    console.log("computer choice = ", computerChoice);

    if(userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock") {
            //scissor, paper
            userWin = computerChoice ==="Paper" ? false : true;
        } else if(userChoice === "Paper") {
            //rock,scissor
           userWin = computerChoice === "Scissor" ? false : true;
        } else {
            //rock,paper
            userWin = computerChoice ==="Rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice)
        PlayGame(userChoice);
    });
});
