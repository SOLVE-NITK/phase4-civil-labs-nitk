
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
      question: "Resistance of the mine gallery do not depend on",
      answers: {
        a: "Velocity of air",
        b: "Coefficient of friction",
        c: "Area of cross section of gallery",
        d: "Rubbing surface of gallery"
      },
      correctAnswer: "a"
    },
    {
      question: "Area of rubbing surface of mine gallery is determined by",
      answers: {
        a: "Perimeter of cross section??Length of the gallery",
        b: "Perimeter of cross section??Length of the gallery ",
        c: "????Length of the gallery??Diameter of cross section",
        d: "Both b & c"
      },
      correctAnswer: "d"
    },
    {
      question: "Frictional pressure drop between two points in a ventilation ducts depend on",
      answers: {
        a: "Velocity of air",
        b: "Coefficient of friction",
        c: "Area of cross section of gallery",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
        question: "Frictional pressure drop across two points is equal to",
        answers: {
          a: "Static pressure difference between two points",
          b: "Total pressure difference between two points",
          c: "Velocity pressure difference between two points",
          d: "Average pressure difference between two points"
        },
        correctAnswer: "b"
      },

      {
        question: "If we smoothen the rubbing surface then resistance of the duct__________",
        answers: {
          a: "Increases",
          b: "Decreases",
          c: "Do not change",
          d: "None of the above"
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
