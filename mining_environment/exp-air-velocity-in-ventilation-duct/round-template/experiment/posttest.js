
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
        question: "Velocity pressure is equal to",
        answers: {
          a: "Total pressure – Static pressure",
          b: "Static pressure – Total pressure",
          c: "Total pressure + Static pressure",
          d: "Average pressure - Total pressure "
        },
        correctAnswer: "a"
    },
    {
        question: "Specific gravity of manometer liquid is",
        answers: {
          a: "0.678",
          b: "0.897",
          c: "0.569",
          d: "0.789"
        },
        correctAnswer: "d"
    },
    {
        question: "What is angle of yaw ? ",
        answers: {
          a: "Angle between vertical axis of pitot tube and direction of air current ",
          b: "Angle between horizontal axis of pitot tube and direction of air current",
          c: "Angle between horizontal and vertical axis of pitot tube ",
          d: "Inclination of U tube manometer "
        },
        correctAnswer: "b"
    },
    {
        question: "Lower is the angle of yaw ",
        answers: {
          a: "Lower is the accuracy of pitot tube",
          b: "No effect on accuracy of pitot tube ",
          c: "Higher is the accuracy of pitot tube ",
          d: "None of these"
        },
        correctAnswer: "c"
    },
    {
        question: "If inclination of manometer is constant, L is scale difference between limb of manometer and P is pressure measured, then which one is correct? ",
        answers: {
          a: "P is directly proportional to L",
          b: "P is inversely proportional to L",
          c: "P is directly proportional to L2",
          d: "P is inversely proportional to L3"
        },
        correctAnswer: "a"
    },
    {
        question: "If density of air is assumed to be constant, Pv  be the velocity pressure and V is the velocity of air. Which one of the given relationship is correct?",
        answers: {
          a: "V α 1/(Pv )0.5",
          b: "V α (Pv )2",
          c: "V α (Pv )",
          d: "V α (Pv )0.5"
        },
        correctAnswer: "d"
    },
   
  ];
// ---------------------------- End -------------------------------
  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
