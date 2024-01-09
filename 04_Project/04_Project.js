let generateNumber = parseInt(Math.random() * 100 + 1);

const btn = document.querySelector("#Btn_Submit");
let userInput = document.querySelector("#guessfield").value;
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowORhigh");
const result = document.querySelector(".result");

const p = document.createElement("p");

let prevGuesses = [];
let numGuesses = 1;

const playGame = true;

if (playGame) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    userInput = parseInt(document.querySelector("#guessfield").value);
    console.log(userInput);
    validateGuesses(userInput);
  });
}

function validateGuesses(guesses) {
  if (isNaN(guesses)) {
    console.log("Enter a valid")
    // alert("PLease enter a valid number");
  } else if (guesses < 1) {
    alert("PLease enter a number more than 1");
  } else if (guesses > 100) {
    alert("PLease enter a  number less than 100");
  } else {
    prevGuesses.push(guesses);
    if (numGuesses > 11) {
      displayGuesses(guesses);
      displayMessage(`Game Over. Random number was ${generateNumber}`);
      endGame();
    } else {
      displayGuesses(guesses);
      checkGuesses(guesses);
    }
  }

  function checkGuesses(guesses) {
    if (guesses === generateNumber) {
      displayMessage(`Congratulations ! You Guess The Right Number`);
      endGame();
    } else if (guesses < generateNumber) {
      displayMessage(`Number is Too Low `);
    } else if (guesses > generateNumber) {
      displayMessage(`Number is Too High `);
    }
  }

  function displayGuesses(guesses) {
    userInput = "";
    guessSlot.innerHTML += `${guesses}, `;
    numGuesses++;
    lastResult.innerHTML = `${11 - numGuesses}`;
  }

  function displayMessage(message) {
    console.log(message)
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
  }

  function endGame() {
    userInput = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame"> Play New Game </h2>`;
    result.appendChild(p);
    playGame = false;
    newGame();
  }

  function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", (e) => {
      generateNumber = parseInt(Math.random() * 100 + 1);
      prevGuesses = [];
      numGuesses = 1;
      guessSlot.innerHTML = "";
      lastResult.innerHTML = `${11 - numGuesses} `;
      userInput.removeAttribute("disabled");
      result.removeChild();
      playGame = true;
    });
  }
}
