const questions = [
  {
    category: "Elektro og datateknologi",
    question: "Hva måles i Ohm (Ω)?",
    options: ["Strøm", "Motstand", "Spenning", "Effekt"],
    answer: 1,
  },
  {
    category: "Elektro og datateknologi",
    question: "Hvilken enhet måler elektrisk strøm?",
    options: ["Volt", "Watt", "Ampere", "Ohm"],
    answer: 2,
  },
  {
    category: "Elektro og datateknologi",
    question: "Hva gjør en sikring i et elektrisk anlegg?",
    options: ["Øker spenningen", "Stopper strømmen hvis den blir for høy", "Lagrer strøm", "Lager energi"],
    answer: 1,
  },
  {
    category: "Elektro og datateknologi",
    question: "Hva står AC for i elektrisitet?",
    options: ["Automatic Current", "Alternating Current", "Active Circuit", "Analog Control"],
    answer: 1,
  },
  {
    category: "Helse- og oppvekstfag",
    question: "Hva er normal kroppstemperatur hos mennesker?",
    options: ["35°C", "37°C", "39°C", "40°C"],
    answer: 1,
  },
  {
    category: "Helse- og oppvekstfag",
    question: "Hva står HLR for?",
    options: ["Hjerte-lungeredning", "Helse-lege-rutine", "Hjelp-liv-redning", "Hjerte-liv-reaksjon"],
    answer: 0,
  },
  {
    category: "Helse- og oppvekstfag",
    question: "Hva betyr taushetsplikt i helsefag?",
    options: [
      "Man må være stille på jobb",
      "Man kan ikke dele private opplysninger om pasienter",
      "Man må skrive rapporter",
      "Man må snakke med pasienter",
    ],
    answer: 1,
  },
  {
    category: "Helse- og oppvekstfag",
    question: "Hva er et viktig prinsipp i smittevern?",
    options: ["Håndhygiene", "Mørke rom", "Mindre mat", "Mindre søvn"],
    answer: 0,
  },
  {
    category: "Idrettsfag",
    question: "Hva er kroppens viktigste energikilde under hard trening?",
    options: ["Protein", "Karbohydrater", "Vann", "Vitaminer"],
    answer: 1,
  },
  {
    category: "Idrettsfag",
    question: "Hva måler makspuls?",
    options: [
      "Maks antall hjerteslag per minutt",
      "Maks oksygenopptak",
      "Maks muskelstyrke",
      "Maks blodtrykk",
    ],
    answer: 0,
  },
  {
    category: "Idrettsfag",
    question: "Hva er VO₂-maks?",
    options: ["Maks muskelstyrke", "Maks oksygenopptak i kroppen", "Maks puls", "Maks fettforbrenning"],
    answer: 1,
  },
  {
    category: "Medier og kommunikasjon",
    question: "Hva betyr målgruppe i media?",
    options: ["Hvor reklamen sendes", "Hvem budskapet er laget for", "Hvor videoen spilles inn", "Hvor mange som ser"],
    answer: 1,
  },
  {
    category: "Medier og kommunikasjon",
    question: "Hva står RGB for i digital design?",
    options: ["Red, Green, Blue", "Rapid Graphic Build", "Render Graphic Base", "Red Gradient Blend"],
    answer: 0,
  },
  {
    category: "Medier og kommunikasjon",
    question: "Hva brukes Adobe Premiere mest til?",
    options: ["Bilderedigering", "Videoredigering", "3D-modellering", "Spilldesign"],
    answer: 1,
  },
  {
    category: "Informasjonsteknologi og medieproduksjon",
    question: "Hva betyr HTML?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Media Link",
      "Home Tool Markup Language",
    ],
    answer: 0,
  },
  {
    category: "Informasjonsteknologi og medieproduksjon",
    question: "Hva gjør CSS i webdesign?",
    options: ["Lager databaser", "Bestemmer utseendet på nettsider", "Lagrer data", "Lager servere"],
    answer: 1,
  },
  {
    category: "Informasjonsteknologi og medieproduksjon",
    question: "Hva er versjonskontroll (Git)?",
    options: [
      "Backup av PC",
      "System for å spore endringer i kode",
      "Antivirus",
      "Database",
    ],
    answer: 1,
  },
  {
    category: "Salg, service og reiseliv",
    question: "Hva er god kundeservice?",
    options: [
      "Å ignorere kunder",
      "Å hjelpe kunder på en vennlig og profesjonell måte",
      "Å selge mest mulig",
      "Å snakke lite",
    ],
    answer: 1,
  },
  {
    category: "Salg, service og reiseliv",
    question: "Hva betyr bærekraftig turisme?",
    options: [
      "Billige turer",
      "Turisme som tar hensyn til miljø og lokalsamfunn",
      "Kortere turer",
      "Bare flyreiser",
    ],
    answer: 1,
  },
  {
    category: "Teknologi- og industrifag",
    question: "Hva er HMS?",
    options: ["Helse, miljø og sikkerhet", "Høy maskin standard", "Hoved maskin system", "Industriell standard"],
    answer: 0,
  },
  {
    category: "Teknologi- og industrifag",
    question: "Hva er en CNC-maskin?",
    options: ["Manuell maskin", "Datastyrt maskin for produksjon", "Håndverktøy", "Sveiseapparat"],
    answer: 1,
  },
  {
    category: "Demokrati og medborgerskap",
    question: "Hva regnes som mobbing?",
    options: [
      "En enkelt krangel mellom venner",
      "Gjentatt negativ atferd mot en person over tid",
      "Å være uenig med noen",
      "Å gi konstruktiv kritikk",
    ],
    answer: 1,
  },
  {
    category: "Demokrati og medborgerskap",
    question: "Hva betyr inkludering?",
    options: [
      "Å holde noen utenfor",
      "Å la alle få være med og føle tilhørighet",
      "Å konkurrere",
      "Å jobbe alene",
    ],
    answer: 1,
  },
  {
    category: "Videospørsmål",
    question: "Se videoen og velg riktig alternativ basert pa demonstrasjonen.",
    options: ["Alternativ A", "Alternativ B", "Alternativ C", "Alternativ D"],
    answer: 2,
    hasVideo: true,
  },
];

const HIGHSCORE_KEY = "bleikerquizzen_highscores";

const introSection = document.querySelector("#quiz-intro");
const quizBox = document.querySelector("#quiz-box");
const resultSection = document.querySelector("#quiz-result");
const playerNameInput = document.querySelector("#player-name");
const startButton = document.querySelector("#start-quiz");
const nextButton = document.querySelector("#next-question");
const restartButton = document.querySelector("#restart-quiz");
const questionCount = document.querySelector("#question-count");
const scoreCount = document.querySelector("#score-count");
const questionText = document.querySelector("#question-text");
const questionCategory = document.querySelector("#question-category");
const answersWrap = document.querySelector("#answer-buttons");
const feedbackText = document.querySelector("#feedback-text");
const resultText = document.querySelector("#result-text");
const highscoreList = document.querySelector("#highscore-list");
const questionVideoWrap = document.querySelector("#question-video-wrap");
const questionVideo = document.querySelector("#question-video");

let playerName = "";
let currentQuestionIndex = 0;
let score = 0;
let questionAnswered = false;

function shuffleQuestions() {
  return [...questions].sort(() => Math.random() - 0.5);
}

let activeQuestions = shuffleQuestions();

function renderQuestion() {
  const q = activeQuestions[currentQuestionIndex];
  questionAnswered = false;
  feedbackText.textContent = "";
  feedbackText.className = "feedback";
  nextButton.classList.add("hidden");
  answersWrap.innerHTML = "";
  questionCount.textContent = `Sporsmal ${currentQuestionIndex + 1} av ${activeQuestions.length}`;
  scoreCount.textContent = `Poeng: ${score}`;
  questionText.textContent = q.question;
  questionCategory.textContent = q.category;

  if (q.hasVideo) {
    questionVideoWrap.classList.remove("hidden");
    if (questionVideo) {
      questionVideo.currentTime = 0;
      questionVideo.pause();
    }
  } else {
    questionVideoWrap.classList.add("hidden");
  }

  q.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(optionIndex));
    answersWrap.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  if (questionAnswered) {
    return;
  }

  questionAnswered = true;
  const q = activeQuestions[currentQuestionIndex];
  const answerButtons = Array.from(document.querySelectorAll(".answer-btn"));

  answerButtons.forEach((button, idx) => {
    button.disabled = true;
    if (idx === q.answer) {
      button.classList.add("correct");
    }
  });

  if (selectedIndex === q.answer) {
    score += 1;
    scoreCount.textContent = `Poeng: ${score}`;
    feedbackText.textContent = "Riktig!";
    feedbackText.classList.add("correct");
  } else {
    answerButtons[selectedIndex].classList.add("wrong");
    feedbackText.textContent = "Feil. Riktig svar er markert.";
    feedbackText.classList.add("wrong");
  }

  nextButton.classList.remove("hidden");
}

function getHighscores() {
  const raw = localStorage.getItem(HIGHSCORE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveHighscore() {
  const highscores = getHighscores();
  highscores.push({
    name: playerName,
    score,
    total: activeQuestions.length,
    percentage: Math.round((score / activeQuestions.length) * 100),
    date: new Date().toLocaleDateString("no-NO"),
  });

  highscores.sort((a, b) => b.score - a.score || b.percentage - a.percentage);
  const topFive = highscores.slice(0, 5);
  localStorage.setItem(HIGHSCORE_KEY, JSON.stringify(topFive));
}

function renderHighscores() {
  const highscores = getHighscores();
  highscoreList.innerHTML = "";

  if (highscores.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Ingen highscore enda.";
    highscoreList.appendChild(li);
    return;
  }

  highscores.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.name}: ${entry.score}/${entry.total} (${entry.percentage}%) - ${entry.date}`;
    highscoreList.appendChild(li);
  });
}

function finishQuiz() {
  quizBox.classList.add("hidden");
  resultSection.classList.remove("hidden");
  resultText.textContent = `${playerName}, du fikk ${score} av ${activeQuestions.length} poeng.`;
  saveHighscore();
  renderHighscores();
}

function goToNextQuestion() {
  currentQuestionIndex += 1;
  if (currentQuestionIndex >= activeQuestions.length) {
    finishQuiz();
    return;
  }
  renderQuestion();
}

function startQuiz() {
  const value = playerNameInput.value.trim();
  if (!value) {
    playerNameInput.focus();
    return;
  }

  playerName = value;
  currentQuestionIndex = 0;
  score = 0;
  activeQuestions = shuffleQuestions();
  introSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  quizBox.classList.remove("hidden");
  renderQuestion();
}

function resetQuiz() {
  playerNameInput.value = "";
  introSection.classList.remove("hidden");
  quizBox.classList.add("hidden");
  resultSection.classList.add("hidden");
}

if (startButton && nextButton && restartButton) {
  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", goToNextQuestion);
  restartButton.addEventListener("click", resetQuiz);
}
