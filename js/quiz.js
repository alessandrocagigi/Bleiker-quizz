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

var HIGHSCORE_KEY = "bleikerquizzen_highscores";

var introSection = document.querySelector("#quiz-intro");
var quizBox = document.querySelector("#quiz-box");
var resultSection = document.querySelector("#quiz-result");
var playerNameInput = document.querySelector("#player-name");
var startButton = document.querySelector("#start-quiz");
var nextButton = document.querySelector("#next-question");
var restartButton = document.querySelector("#restart-quiz");
var questionCount = document.querySelector("#question-count");
var scoreCount = document.querySelector("#score-count");
var questionText = document.querySelector("#question-text");
var questionCategory = document.querySelector("#question-category");
var answersWrap = document.querySelector("#answer-buttons");
var feedbackText = document.querySelector("#feedback-text");
var resultText = document.querySelector("#result-text");
var highscoreList = document.querySelector("#highscore-list");
var questionVideoWrap = document.querySelector("#question-video-wrap");
var questionVideo = document.querySelector("#question-video");

var playerName = "";
var currentQuestionIndex = 0;
var score = 0;
var questionAnswered = false;
var activeQuestions = [];

function shuffleQuestions() {
  var arr = [];
  for (var i = 0; i < questions.length; i++) {
    arr.push(questions[i]);
  }
  arr.sort(function () {
    return Math.random() - 0.5;
  });
  return arr;
}

function renderQuestion() {
  var q = activeQuestions[currentQuestionIndex];
  questionAnswered = false;

  feedbackText.textContent = "";
  feedbackText.className = "feedback";
  nextButton.classList.add("hidden");

  answersWrap.innerHTML = "";

  questionCount.textContent = "Sporsmal " + (currentQuestionIndex + 1) + " av " + activeQuestions.length;
  scoreCount.textContent = "Poeng: " + score;
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

  for (var i = 0; i < q.options.length; i++) {
    var optionText = q.options[i];

    var btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.type = "button";
    btn.textContent = optionText;

    (function (selectedIndex) {
      btn.addEventListener("click", function () {
        handleAnswer(selectedIndex);
      });
    })(i);

    answersWrap.appendChild(btn);
  }
}

function handleAnswer(selectedIndex) {
  if (questionAnswered) return;
  questionAnswered = true;

  var q = activeQuestions[currentQuestionIndex];
  var answerButtons = answersWrap.getElementsByClassName("answer-btn");

  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].disabled = true;
    if (i === q.answer) {
      answerButtons[i].classList.add("correct");
    }
  }

  if (selectedIndex === q.answer) {
    score = score + 1;
    scoreCount.textContent = "Poeng: " + score;
    feedbackText.textContent = "Riktig!";
    feedbackText.classList.add("correct");
  } else {
    if (answerButtons[selectedIndex]) {
      answerButtons[selectedIndex].classList.add("wrong");
    }
    feedbackText.textContent = "Feil. Riktig svar er markert.";
    feedbackText.classList.add("wrong");
  }

  nextButton.classList.remove("hidden");
}

function getHighscores() {
  var raw = localStorage.getItem(HIGHSCORE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveHighscore() {
  var highscores = getHighscores();

  highscores.push({
    name: playerName,
    score: score,
    total: activeQuestions.length,
    percentage: Math.round((score / activeQuestions.length) * 100),
    date: new Date().toLocaleDateString("no-NO"),
  });

  highscores.sort(function (a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return b.percentage - a.percentage;
  });

  var topFive = highscores.slice(0, 5);
  localStorage.setItem(HIGHSCORE_KEY, JSON.stringify(topFive));
}

function renderHighscores() {
  var highscores = getHighscores();
  highscoreList.innerHTML = "";

  if (highscores.length === 0) {
    var li = document.createElement("li");
    li.textContent = "Ingen highscore enda.";
    highscoreList.appendChild(li);
    return;
  }

  for (var i = 0; i < highscores.length; i++) {
    var entry = highscores[i];
    var li2 = document.createElement("li");
    li2.textContent =
      entry.name +
      ": " +
      entry.score +
      "/" +
      entry.total +
      " (" +
      entry.percentage +
      "%) - " +
      entry.date;
    highscoreList.appendChild(li2);
  }
}

function finishQuiz() {
  quizBox.classList.add("hidden");
  resultSection.classList.remove("hidden");

  resultText.textContent = playerName + ", du fikk " + score + " av " + activeQuestions.length + " poeng.";
  saveHighscore();
  renderHighscores();
}

function goToNextQuestion() {
  currentQuestionIndex = currentQuestionIndex + 1;

  if (currentQuestionIndex >= activeQuestions.length) {
    finishQuiz();
    return;
  }

  renderQuestion();
}

function startQuiz() {
  var value = playerNameInput.value.trim();
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
