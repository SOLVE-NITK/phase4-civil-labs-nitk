
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
      question: "The Percolation test is used to determine_______",
      answers: {
        a: "The water absorption rate of soil",
        b: "Texture of soil",
        c: "Pore space of soil",
        d: "Bulk density of soil"
      },
      correctAnswer: "d"
    },
    {
      question: "The unit of percolation rate of the soil is________",
      answers: {
        a: "Unitless",
        b: "g/cc ",
        c: "ml/s",
        d: "cm/s"
      },
      correctAnswer: "d"
    },
    {
      question: "The water content of the soil can_________",
      answers: {
        a: "Never be greater than 100%",
        b: "Be less than 0%",
        c: "Between 0% to 100%",
        d: "Be greater than 100%"
      },
      correctAnswer: "b"
    },
    {
        question: "If the voids of a soil mass are full of air only, the soil is termed as__________",
        answers: {
          a: "Dehydrated soil",
          b: "Dry soil",
          c: "Air entrained soil",
          d: "Air entrained soil"
        },
        correctAnswer: "c"
      },

      {
        question: "In backward bladed fan, no of blade varies from",
        answers: {
          a: "32-66",
          b: "14-24",
          c: "10-20",
          d: "None of the above"
        },
        correctAnswer: "b"
      },
      {
        question: "Fully saturated soil is said to be",
        answers: {
          a: "One phase system",
          b: "Two-phase system with soil and air",
          c: "Two-phase system with soil and water",
          d: "Three-phase system"
        },
        correctAnswer: "b"
      }, {
        question: "From the following, which soil will absorb most water",
        answers: {
          a: "Sandy soil",
          b: "Clay",
          c: "Silt",
          d: "Gravel"
        },
        correctAnswer: "b"
      }, {
        question: "From the following, which soil will absorb most water      ",
        answers: {
          a: "Sandy soil",
          b: "Clay",
          c: "Silt",
          d: "Gravel"
        },
        correctAnswer: "b"
      }, {
        question: "Which of the following statement is correct",
        answers: {
          a: "Unit weight of dry soil is greater than the unit weight of wet soil",
          b: "For dry soils, dry unit weight is less than total unit weight.",
          c: "Unit weight of soil increase due to submergence in water",
          d: "Unit weight of soil decreases due to submergence in water"
        },
        correctAnswer: "b"
      },
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
