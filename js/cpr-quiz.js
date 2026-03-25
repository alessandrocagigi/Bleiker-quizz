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

document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector("#cpr-questions");
  if (!container) return;

  container.innerHTML = "";

  for (var i = 0; i < cprQuestions.length; i++) {
    var q = cprQuestions[i];

    var wrap = document.createElement("article");
    wrap.className = "cpr-question";

    var badge = document.createElement("p");
    badge.className = "badge";
    badge.textContent = "Sporsmal " + (i + 1);
    wrap.appendChild(badge);

    var h = document.createElement("h3");
    h.textContent = q.question;
    wrap.appendChild(h);

    var answers = document.createElement("div");
    answers.className = "answers";
    wrap.appendChild(answers);

    var feedback = document.createElement("p");
    feedback.className = "feedback";
    wrap.appendChild(feedback);

    for (var opt = 0; opt < q.options.length; opt++) {
      var btn = document.createElement("button");
      btn.className = "answer-btn";
      btn.type = "button";
      btn.textContent = q.options[opt];

      (function (pickedIndex) {
        btn.addEventListener("click", function () {
          var all = answers.getElementsByClassName("answer-btn");

          for (var k = 0; k < all.length; k++) {
            all[k].disabled = true;
            if (k === q.answer) {
              all[k].classList.add("correct");
            }
          }

          if (pickedIndex === q.answer) {
            feedback.textContent = "Riktig!";
            feedback.classList.remove("wrong");
            feedback.classList.add("correct");
          } else {
            if (all[pickedIndex]) {
              all[pickedIndex].classList.add("wrong");
            }
            feedback.textContent = "Feil. Riktig svar er markert.";
            feedback.classList.remove("correct");
            feedback.classList.add("wrong");
          }
        });
      })(opt);

      answers.appendChild(btn);
    }

    container.appendChild(wrap);
  }
});

