
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
      question: "What is hygrometer used for?   ",
      answers: {
        a: "Relative humidity",
        b: "Humidity percentage",
        c: "Absolute humidity",
        d: "None of these"
      },
      correctAnswer: "a"
    },
    {
      question: "Whirling hygrometer contains ______thermometer",
      answers: {
        a: "One",
        b: "Two",
        c: "Three",
        d: "Four"
      },
      correctAnswer: "b"
    },
    {
      question: "Relative humidity means",
      answers: {
        a: "Moisture content in air",
        b: "Average temperature of air",
        c: "Velocity of air",
        d: "All of these"
      },
      correctAnswer: "a"
    },
    {
        question: "If environment is saturated then we say ",
        answers: {
          a: "Relative humidity is 100%",
          b: "It reached at Dew point ",
          c: "Both a & b ",
          d: "Humidity percentage is 100"
        },
        correctAnswer: "a"
      },
    {
        question: "Which thermometer has muslin cloth at the nose ?",
    answers: {
          a: "Dry bulb",
          b: "Wet bulb",
          c: "Both a & b",
          d: "None of them contain muslin cloth "
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
