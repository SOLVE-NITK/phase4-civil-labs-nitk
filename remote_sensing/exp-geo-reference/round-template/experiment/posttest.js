
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
      question: "Convert 45°15’45’’ to decimal degrees.",
      answers: {
        a: "45.26",
        b: "45.36",
        c: "45.00",
        d: "42.26"
      },
      correctAnswer: "a"
    },
    {
      question: "An ___projection is one that preserves direction for all straight lines passing through a single, specified point.",
      answers: {
        a: "Conformal",
        b: "Equidistant",
        c: "Azimuthal",
        d: "All of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "The Universal Polar Stereographic (UPS) is defined above _ degrees north latitude and south of _ degrees south latitude.",
      answers: {
        a: "82N and 80S",
        b: "80S and 84N",
        c: "82S and 80N",
        d: "84N and 80S"
      },
      correctAnswer: "d"
    },
    {
      question: "All easting values east and west of the central meridian will be____.",
      answers: {
        a: "Negative",
        b: "Positive",
        c: "Both a and b",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Users cannot view data inside the File Geodatabase while the geodatabase is being edited by another user",
      answers: {
        a: "True",
        b: "False"
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
