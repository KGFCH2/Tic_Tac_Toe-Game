console.log("Tic Tac Toe Game Loaded");

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true; // Reset turn to O
    enableBoxes(); // Enable all boxes
    msgContainer.classList.add("hide"); // Hide the message container
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) { // If it's O's turn
        box.innerText = "O";
        turnO = false;
        } else { // If it's X's turn
        box.innerText = "X";
        turnO = true;
        }
        box.disabled = true; // Disable the box after selection

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true; // Disable all boxes
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false; // Enable all boxes
        box.innerText = ""; // Clear the text in each box
    }
}

const showWinner = (winner) => {
    msg.innerText = 'Congratulations, Winner is: ' + winner;
    msgContainer.classList.remove("hide");
    disableBoxes(); // Disable all boxes when a winner is found
}

const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);