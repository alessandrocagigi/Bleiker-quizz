const cprQuestions = [
  {
    category: "CPR",
    question: "Hvor dypt skal du trykke i brystkompresjon?",
    options: ["Ca. 1-2 cm", "Ca. 3-4 cm", "Ca. 5-6 cm", "Ca. 10 cm"],
    answer: 2,
  },
  {
    category: "CPR",
    question: "Hvor ofte (tempo) skal du trykke?",
    options: ["Ca. 40 trykk/min", "Ca. 60 trykk/min", "Ca. 80 trykk/min", "Ca. 100–120 trykk/min"],
    answer: 3,
  },
  {
    category: "CPR",
    question: "Når du kan gjøre innblåsninger: hvilket forhold bruker du?",
    options: ["30 trykk og 2 innblåsninger", "15 trykk og 5 innblåsninger", "50 trykk og 1 innblåsing", "1 trykk og 2 innblåsninger"],
    answer: 0,
  },
];

function createCprQuestionBlock(q, index) {
  const wrap = document.createElement("article");
  wrap.className = "cpr-question";

  const badge = document.createElement("p");
  badge.className = "badge";
  badge.textContent = `Sporsmal ${index + 1}`;

  const title = document.createElement("h3");
  title.textContent = q.question;

  const answers = document.createElement("div");
  answers.className = "answers";

  const feedback = document.createElement("p");
  feedback.className = "feedback";

  q.options.forEach((optionText, optionIndex) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.type = "button";
    btn.textContent = optionText;
    btn.addEventListener("click", () => {
      const allButtons = Array.from(answers.querySelectorAll("button.answer-btn"));
      allButtons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === q.answer) b.classList.add("correct");
      });

      if (optionIndex === q.answer) {
        feedback.textContent = "Riktig!";
        feedback.classList.add("correct");
      } else {
        allButtons[optionIndex].classList.add("wrong");
        feedback.textContent = "Feil. Riktig svar er markert.";
        feedback.classList.add("wrong");
      }
    });

    answers.appendChild(btn);
  });

  wrap.appendChild(badge);
  wrap.appendChild(title);
  wrap.appendChild(answers);
  wrap.appendChild(feedback);

  return wrap;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#cpr-questions");
  if (!container) return;

  container.innerHTML = "";
  cprQuestions.forEach((q, index) => {
    container.appendChild(createCprQuestionBlock(q, index));
  });
});

