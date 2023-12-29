// Initial References

// Questions or Images

const questions = [
  {
    image: "images/Alakazam.jpg",
    correct_option: "Alakazam",
  },
  {
    image: "images/Arcanine.jpg",
    correct_option: "Arcanine",
  },
  {
    image: "images/Bulbasaur.jpg",
    correct_option: "Bulbasaur",
  },
  {
    image: "images/Cubone.jpg",
    correct_option: "Cubone",
  },
  {
    image: "images/Ditto.jpg",
    correct_option: "Ditto",
  },
  {
    image: "images/Gloom.jpg",
    correct_option: "Gloom",
  },
  {
    image: "images/Gyarados.jpg",
    correct_option: "Gyarados",
  },
  {
    image: "images/Hitmonlee.jpg",
    correct_option: "Hitmonlee",
  },
  {
    image: "images/Horsea.jpg",
    correct_option: "Horsea",
  },
  {
    image: "images/Koffing.jpg",
    correct_option: "Koffing",
  },
  {
    image: "images/Mewtwo.jpg",
    correct_option: "Mewtwo",
  },
  {
    image: "images/Seaking.jpg",
    correct_option: "Seaking",
  },
  {
    image: "images/Tauros.jpg",
    correct_option: "Tauros",
  },
  {
    image: "images/Venonat.jpg",
    correct_option: "Venonat",
  },
  {
    image: "images/Victreebe.jpg",
    correct_option: "Victreebe",
  },
  {
    image: "images/eevee.jpg",
    correct_option: "Eevee",
  },
];

// All options
const optionsArray = [
  "Alakazam",
  "Arcanine",
  "Bulbasaur",
  "Cubone",
  "Ditto",
  "Gloom",
  "Gyarados",
  "Hitmonlee",
  "Horsea",
  "Koffing",
  "Mewtwo",
  "Pikachu",
  "Seaking",
  "Tauros",
  "Venonat",
  "Victreebe",
  "Eevee",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
];

const container = document.querySelector(".container");
const gameContainer = document.querySelector(".game-container");
const startButton = document.getElementById("start");
const scoreContainer = document.querySelector(".score-container");
const userScore = document.getElementById("user-score");

let timer = document.getElementsByClassName("timer")[0];
let nextBtn;
let score, currentQuestion, finalQuestions;
let countdown,
  count = 11;

// Random value from array
const randomValueGenerator = (array) =>
  array[Math.floor(Math.random() * array.length)];

// Random shuffle array
const randomShuffle = (array) => array.sort(() => 0.5 - Math.random());

// Start game
const startGame = () => {
  // Select random 5 questions
  scoreContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  finalQuestions = populateQuestions();
  score = 0;
  currentQuestion = 0;

  //Generate card for first question
  cardGenerator(finalQuestions[currentQuestion]);
};

// Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count -= 1;
    timer.innerHTML = `<span>Time Left: ${count} s</span>`;
    if(count == 0) {
      nextQuestion();
    }
  }, 1000);
};

// Create options
const populateOptions = (correct_option) => {
  let arr = [];
  arr.push(correct_option);
  let optionsCount = 1;
  while(optionsCount < 4) {
    let randomvalue = randomValueGenerator(optionsArray);
    if(!arr.includes(randomvalue)){
      arr.push(randomvalue);
      optionsCount += 1;
    };
  };
  return arr;
};

// Choose random questions
const populateQuestions = () => {
  let questionsCount = 0;
  let chosenObjects = [];
  let questionsBatch = [];

  // 5 Questions
  while(questionsCount < 5) {
    let randomvalue = randomValueGenerator(questions);
    let index = questions.indexOf(randomvalue);
    if(!chosenObjects.includes(index)) {
      questionsBatch.push(randomvalue);
      chosenObjects.push(index);
      questionsCount += 1;
    };
  };
  return questionsBatch;
};

// Card UI
const cardGenerator = (cardObject) => {
  const { image, correct_option } = cardObject;
  let options = randomShuffle(populateOptions(correct_option));
  container.innerHTML = `<div class="quiz">
                          <p class="num">
                          ${currentQuestion + 1}/5
                          </p>
                          <div class="questions">
                            <img class="pokemon-image" src="${image}"/>
                          </div>
                            <div class="options">
                            <button class="option" onclick="checker(event)">${options[0]}
                            </button>
                            <button class="option" onclick="checker(event)">${options[1]}
                            </button>
                            <button class="option" onclick="checker(event)">${options[2]}
                            </button>
                            <button class="option" onclick="checker(event)">${options[3]}
                            </button>
                            </div>
                            <div class="nxt-btn-div">
                                <button class="next-btn" onclick="nextQuestion(event)">Next</button>
                            </div>
                          </div>`;

  // For timer
  count = 11;
  clearInterval(countdown);

  //Display timer
  timerDisplay();
};

startButton.addEventListener("click", startGame);
