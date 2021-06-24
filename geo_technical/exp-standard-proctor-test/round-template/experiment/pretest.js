
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "The measurement of compaction can be performed in terms of",
      answers: {
        a: "Dry density",
        b: "Specific gravity",
        c: "Compressibility",
        d: "Permeability"
      },
      correctAnswer: "a"
    },

    {
      question: "The aim of compaction is",
      answers: {
        a: "Decreasing dry density ",
        b: "Increasing porosity",
        c: "Decreasing void ratio",
        d: "Decreasing shear strength"
      },
      correctAnswer: "c"
    },

    {
      question: "Which of the following is the correct statement? <br>Vibratory rollers are suitable for compacting.",
      answers: {
        a: "Organic soil",
        b: "Clays",
        c: "Sand and gravels",
        d: "Clay silts"
      },
      correctAnswer: "c"
    },
    {
        question: "As the Compaction increases, the porosity decreases.",
        answers: {
          a: "False",
          b: "True"
        },
        correctAnswer: "b"
      },
    {
        question: "Which of the following does not produce compaction?",
    answers: {
          a: "Vibration",
          b: "Tamping",
          c: "Rolling",
          d: "Adding excess water"
        },
        correctAnswer: "d"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
