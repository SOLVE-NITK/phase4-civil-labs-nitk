
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
      question: "The property of a soil that allows it to be deformed rapidly, without rupture is ______  ",
      answers: {
        a: "Elasticity",
        b: "Plasticity",
        c: "Tenacity",
        d: "None of the above"
      },
      correctAnswer: "b"
    },

    {
      question: " The Swedish agriculturist who divided the entire range of consistency from liquid to solid state is __________ .",
      answers: {
        a: "Dupuit’s",
        b: "Laplace",
        c: "Boussinesq",
        d: "Atterberg"
      },
      correctAnswer: "d"
    },

    {
      question: "Which of the following is not useful for engineer purposes, as proposed by Atterberg?",
      answers: {
        a: "Plastic limit",
        b: "Liquid limit",
        c: "Solid limit",
        d: "Shrinkage limit"
      },
      correctAnswer: "c"
    },
    {
      question: "Clay does not become plastic when mixed with ___________ .",
      answers: {
        a: "Kerosene",
        b: "Oil",
        c: "Soap solution",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "In consistency of soil, the limits are expressed in terms of__________ .",
      answers: {
        a: "Percent water content",
        b: "Area",
        c: "Volume",
        d: "All of the above"
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
