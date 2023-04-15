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

  userChoice.innerHTML = "";
  aiChoice.innerHTML = `<div class="ai-choice">
  <div class="transparentCircle"></div>
  <p class="aiPick">THE HOUSE PICKED</p>
</div>`;
  winnerText.innerHTML = "";
  gameDiv.style.display = "block";
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
      <button class="game-btn">
        <div class="choice paper">
          <img src="./images/icon-paper.svg" alt="paper" />
        </div>
      </button>
      <p class="yourPick">YOUR PICKED</p>
    `;

  activateRandomChoiceGenerator(); // Call this function to generate AI choice after 3 seconds
});

scissorsBtn.addEventListener("click", () => {
  gameDiv.style.display = "none";
  resultDiv.style.display = "flex";
  yourChoice.innerHTML = `
      <button class="game-btn">
        <div class="choice scissors">
          <img src="./images/icon-scissors.svg" alt="scissors" />
        </div>
      </button>
      <p class="yourPick">YOUR PICKED</p>
    `;
  activateRandomChoiceGenerator(); // Call this function to generate AI choice after 3 seconds
});

rockBtn.addEventListener("click", () => {
  gameDiv.style.display = "none";
  resultDiv.style.display = "flex";
  yourChoice.innerHTML = `
      <button class="game-btn">
        <div class="choice rock">
          <img src="./images/icon-rock.svg" alt="rock" />
        </div>
      </button>
      <p class="yourPick">YOUR PICKED</p>
    `;
  activateRandomChoiceGenerator(); // Call this function to generate AI choice after 3 seconds
});

// radomizer

const transparentCircle = document.querySelector(".transparentCircle");
function activateRandomChoiceGenerator() {
  // Set a timeout to call the generateRandomChoice() function after 3 seconds
  setTimeout(function () {
    const choice = generateRandomChoice();
    // Do something with the generated choice, such as append it to the DOM
    console.log(choice);
  }, 1000);
}

function generateRandomChoice() {
  // Create an array with the image sources for paper, rock, and scissors
  const imageSources = [
    "./images/icon-paper.svg",
    "./images/icon-rock.svg",
    "./images/icon-scissors.svg",
  ];

  // Choose a random index from the imageSources array
  const randomIndex = Math.floor(Math.random() * imageSources.length);

  // Create a new div element to hold the AI's choice
  const aiChoice = document.createElement("div");
  aiChoice.classList.add("choice");
  if (imageSources[randomIndex] === "./images/icon-paper.svg") {
    aiChoice.classList.add("paper");
  } else if (imageSources[randomIndex] === "./images/icon-scissors.svg") {
    aiChoice.classList.add("scissors");
  } else if (imageSources[randomIndex] === "./images/icon-rock.svg") {
    aiChoice.classList.add("rock");
  }

  // Create a new image element and set its source to the chosen image
  const choiceImg = document.createElement("img");
  const paragraph = document.createElement("p");
  paragraph.innerText = "THE HOUSE PICKED";
  choiceImg.src = imageSources[randomIndex];

  // Append the image element to the div element
  aiChoice.appendChild(choiceImg);
  aiChoice.appendChild(paragraph);

  // Get the user's choice from the DOM
  const userChoice = document.querySelector(".your-choice .choice");

  // Compare the user's choice and the AI's choice and display the winner
  if (yourChoice.querySelector(".choice").classList.contains("paper")) {
    if (aiChoice.classList.contains("scissors")) {
      winnerText.innerText = "You lose!";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) - 1;
    } else if (aiChoice.classList.contains("rock")) {
      winnerText.innerText = "You win!";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) + 1;
    } else {
      winnerText.innerText = "It's a tie!";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML);
    }
  } else if (yourChoice.querySelector(".choice").classList.contains("rock")) {
    if (aiChoice.classList.contains("paper")) {
      winnerText.innerText = "You lose!";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) - 1;
    } else if (aiChoice.classList.contains("scissors")) {
      winnerText.innerText = "You win!";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) + 1;
    } else {
      winnerText.innerText = "It's a tie!";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML);
    }
  } else if (
    yourChoice.querySelector(".choice").classList.contains("scissors")
  ) {
    if (aiChoice.classList.contains("rock")) {
      winnerText.innerText = "You lose!";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) - 1;
    } else if (aiChoice.classList.contains("paper")) {
      winnerText.innerText = "You win!";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) + 1;
    } else {
      winnerText.innerText = "It's a tie!";
      scoreTracker.innerHTML = parseInt(scoreTracker.innerHTML) - 1;
    }
  }

  // Hide the transparent circle element
  transparentCircle.style.display = "none";

  // Append the AI's choice to the result section
  const aiChoiceContainer = document.querySelector(".ai-choice");
  aiChoiceContainer.innerHTML = "";
  aiChoiceContainer.appendChild(aiChoice);

  // Return the generated div element
  return aiChoice;
}
