let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let newGameBtn = document.querySelector(".newGame");
let displayMsg = document.querySelector(".msg");

// Common function
function compChoose() {
  computerSel = ["Rock", "Paper", "Scissors"];
  // Math.floor round off; Math.random to choose and  length to get exact size of an array
  return computerSel[Math.floor(Math.random() * computerSel.length)];
}
function disableButton() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}
function enableButton() {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  displayMsg.classList.add("hide");
}

//  Function for Rock
rockBtnFunction = () => {
  let compChoice = compChoose();
  if (compChoice === "Rock") {
    displayMsg.innerText = `Comp: ${compChoice} You:Rock  \n Draw, Start New Game`;
  } else if (compChoice === "Paper") {
    displayMsg.innerText = `Comp: ${compChoice} You:Rock \n Loose, Start New Game`;
  } else {
    displayMsg.innerText = `Comp: ${compChoice} You:Rock \n  Win, Start New Game`;
  }
  disableButton();
  displayMsg.classList.remove("hide");
};
//  Function for Paper
paperBtnFunction = () => {
  let compChoice = compChoose();
  if (compChoice === "Paper") {
    displayMsg.innerText = `Comp: ${compChoice} You: Paper \n Draw, Start New Game`;
  } else if (compChoice === "Scissors") {
    displayMsg.innerText = `Comp: ${compChoice} You: Paper \n Lose, Start New Game`;
  } else {
    displayMsg.innerText = `Comp: ${compChoice} You: Paper \n Win, Start New Game`;
  }
  disableButton();
  displayMsg.classList.remove("hide");
};
//  Function for Scissors
scissorsBtnFunction = () => {
  let compChoice = compChoose();

  if (compChoice === "Scissors") {
    displayMsg.innerText = `Comp: ${compChoice} You: Scissors \n Draw, Start New Game`;
  } else if (compChoice === "Rock") {
    displayMsg.innerText = `Comp: ${compChoice} You: Scissors \n Loose, Start New Game`;
  } else {
    displayMsg.innerText = `Comp: ${compChoice} You: Scissors \n  Win, Start New Game`;
  }
  disableButton();
  displayMsg.classList.remove("hide");
};

rockBtn.addEventListener("click", rockBtnFunction);
paperBtn.addEventListener("click", paperBtnFunction);
scissorsBtn.addEventListener("click", scissorsBtnFunction);
newGameBtn.addEventListener("click", enableButton);
