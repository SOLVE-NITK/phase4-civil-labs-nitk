
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
      question: "The standard proctor test was designed by ",
      answers: {
        a: "R.R Proctor",
        b: "Skempton",
        c: "Darcy",
        d: "Terzagi"
      },
      correctAnswer: "d"
    },

    {
      question: "In a standard proctor test, the mould has a capacity of _____ cu. ft.",
      answers: {
        a: "1/10",
        b: "1/20",
        c: "1/30",
        d: "1/40"
      },
      correctAnswer: "c"
    },

    {
      question: "In standard Proctor test, rammer weight is _____.",
      answers: {
        a: "4.5kg",
        b: "18 lb",
        c: "2.5 kg",
        d: "20 lb"
      },
      correctAnswer: "c"
    },
    {
      question: "Once compaction is done ",
      answers: {
        a: "There is a decrease in the volume of soil",
        b: "Removal of air takes place",
        c: "Both (a) and (b)",
        d: "There is an increase in the volume of soil"
      },
      correctAnswer: "c"
    },
    {
      question: "Numbers of layers in compaction of soil is depending upon _____.",
      answers: {
        a: "Amount of compaction required and the soil type",
        b: "Water content in the soil",
        c: "All of the above",
        d: "None of the above"
      },
      correctAnswer: "a"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
