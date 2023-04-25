"use strict";
const result = document.querySelector(".result");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const rockBtn = document.querySelector(".rock");

const modalDiv = document.querySelector(".modal");

const rulesBtn = document.querySelector(".rules");
const closeBtn = document.querySelector(".close-btn");

const gameDiv = document.querySelector(".game");
const resultDiv = document.querySelector(".result");
const againBtn = document.querySelector(".again");
const yourChoice = document.querySelector(".your-choice");
const winnerText = document.querySelector(".winnerText");
const scoreTracker = document.querySelector(".scoreTracker");

againBtn.addEventListener("click", () => {
  const userChoice = document.querySelector(".your-choice .choice");
  const aiChoice = document.querySelector(".ai-choice ");
  againBtn.style.display = "none";
  userChoice.innerHTML = "";
  aiChoice.innerHTML = `<div class="ai-choice">
  <div class="transparentCircle"></div>
 </div>`;
  winnerText.innerHTML = "";
  gameDiv.style.display = "flex";
  resultDiv.style.display = "none";
});
rulesBtn.addEventListener("click", () => {
  modalDiv.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modalDiv.style.display = "none";
});

paperBtn.addEventListener("click", () => {
  gameDiv.style.display = "none";
  resultDiv.style.display = "flex";
  yourChoice.innerHTML = `
      <button class="game-btn" id="createdYourChoice">
        <div class="choice paper">
          <img src="./images/icon-paper.svg" alt="paper" />
        </div>
      </button>
     
    `;

  activateRandomChoiceGenerator();
});

scissorsBtn.addEventListener("click", () => {
  gameDiv.style.display = "none";
  resultDiv.style.display = "flex";
  yourChoice.innerHTML = `
      <button class="game-btn" id="createdYourChoice">
        <div class="choice scissors">
          <img src="./images/icon-scissors.svg" alt="scissors" />
        </div>
      </button>
     
    `;
  activateRandomChoiceGenerator();
});

rockBtn.addEventListener("click", () => {
  gameDiv.style.display = "none";
  resultDiv.style.display = "flex";
  yourChoice.innerHTML = `
      <button class="game-btn" id="createdYourChoice">
        <div class="choice rock">
          <img src="./images/icon-rock.svg" alt="rock" />
        </div>
      </button>
      
    `;
  activateRandomChoiceGenerator();
});

// Randomizer

const transparentCircle = document.querySelector(".transparentCircle");
function activateRandomChoiceGenerator() {
  setTimeout(function () {
    const choice = generateRandomChoice();

    console.log(choice);
  }, 1000);
}

function generateRandomChoice() {
  const imageSources = [
    "./images/icon-paper.svg",
    "./images/icon-rock.svg",
    "./images/icon-scissors.svg",
  ];

  //  can be changed if we add other icon sources
  const randomIndex = Math.floor(Math.random() * imageSources.length);

  const aiChoice = document.createElement("div");
  aiChoice.classList.add("choice");
  if (imageSources[randomIndex] === "./images/icon-paper.svg") {
    aiChoice.classList.add("paper");
  } else if (imageSources[randomIndex] === "./images/icon-scissors.svg") {
    aiChoice.classList.add("scissors");
  } else if (imageSources[randomIndex] === "./images/icon-rock.svg") {
    aiChoice.classList.add("rock");
  }

  const choiceImg = document.createElement("img");
  const paragraph = document.createElement("p");
  paragraph.setAttribute("id", "theHouseParagraph");

  paragraph.innerText = "THE HOUSE PICKED";
  choiceImg.src = imageSources[randomIndex];

  aiChoice.appendChild(choiceImg);

  const userChoice = document.querySelector(".your-choice .choice");

  if (yourChoice.querySelector(".choice").classList.contains("paper")) {
    if (aiChoice.classList.contains("scissors")) {
      winnerText.innerText = "You lose!";
      againBtn.style.display = "block";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) - 1;
    } else if (aiChoice.classList.contains("rock")) {
      winnerText.innerText = "You win!";
      againBtn.style.display = "block";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) + 1;
    } else {
      winnerText.innerText = "It's a tie!";
      againBtn.style.display = "block";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML);
    }
  } else if (yourChoice.querySelector(".choice").classList.contains("rock")) {
    if (aiChoice.classList.contains("paper")) {
      winnerText.innerText = "You lose!";
      againBtn.style.display = "block";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) - 1;
    } else if (aiChoice.classList.contains("scissors")) {
      winnerText.innerText = "You win!";
      againBtn.style.display = "block";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) + 1;
    } else {
      winnerText.innerText = "It's a tie!";
      againBtn.style.display = "block";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML);
    }
  } else if (
    yourChoice.querySelector(".choice").classList.contains("scissors")
  ) {
    if (aiChoice.classList.contains("rock")) {
      winnerText.innerText = "You lose!";
      againBtn.style.display = "block";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) - 1;
    } else if (aiChoice.classList.contains("paper")) {
      winnerText.innerText = "You win!";
      againBtn.style.display = "block";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) + 1;
    } else {
      winnerText.innerText = "It's a tie!";
      againBtn.style.display = "block";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML);
    }
  }

  transparentCircle.style.display = "none";

  const aiChoiceContainer = document.querySelector(".ai-choice");
  aiChoiceContainer.innerHTML = "";
  aiChoiceContainer.appendChild(aiChoice);
  aiChoiceContainer.appendChild(paragraph);

  return aiChoice;
}
