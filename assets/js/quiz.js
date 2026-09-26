// "Check your understanding" quizzes. Choosing an answer only marks it; the Check button
// reveals that choice's explanation in the aria-live region. No scoring, no storage.
(function () {
  function setup(quiz) {
    var form = quiz.querySelector(".qw-quiz-form");
    var feedback = quiz.querySelector(".qw-quiz-feedback");
    if (!form || !feedback) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var selected = form.querySelector("input[type=radio]:checked");
      if (!selected) {
        feedback.className = "qw-quiz-feedback qw-quiz-prompt";
        feedback.textContent = "Choose an answer, then select Check.";
        return;
      }

      var template = selected.parentElement.querySelector(".qw-quiz-explanation");
      var correct = template && template.getAttribute("data-correct") === "true";
      var verdict = document.createElement("p");
      verdict.className = "qw-quiz-verdict";
      verdict.textContent = correct ? "Correct." : "Not quite.";

      feedback.className = "qw-quiz-feedback " + (correct ? "qw-quiz-correct" : "qw-quiz-incorrect");
      feedback.replaceChildren(verdict);
      if (template) feedback.appendChild(template.content.cloneNode(true));
    });

    form.addEventListener("change", function () {
      feedback.className = "qw-quiz-feedback";
      feedback.replaceChildren();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".qw-quiz").forEach(setup);
  });
})();
