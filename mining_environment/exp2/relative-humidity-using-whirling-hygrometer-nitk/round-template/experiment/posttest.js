
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
        question: "Whirling hygrometer should be whirled at an approximate speed of_____ ",
        answers: {
          a: "100rpm",
          b: "200rpm",
          c: "150rpm",
          d: "167rpm"
        },
        correctAnswer: "b"
    },
    {
        question: "At dew point",
        answers: {
          a: "Dry bulb temperature = Wet bulb temperature",
          b: "Wet bulb temperature > Dry bulb temperature",
          c: "Relative humidity is 100%",
          d: "Both a & c"
        },
        correctAnswer: "a"
    },
    {
        question: "Wet bulb temperature is measure of ____",
        answers: {
          a: "Temperature of moisture present in air",
          b: "Evaporating capacity of air",
          c: "Normal temperature of air",
          d: "Sensible heat content of air"
        },
        correctAnswer: "b"
    },
    {
        question: "Dry bulb temperature is measure of ",
        answers: {
          a: "Evaporating capacity of air",
          b: "Sensible heat content of air",
          c: "Both a & b",
          d: "Latent heat content of air"
        },
        correctAnswer: "b"
    },
    {
        question: "Higher the relative humidity, ",
        answers: {
          a: "Lower is the value of wet bulb temperature",
          b: "Higher is the value of wet bulb temperature",
          c: "Wet bulb temperature is greater than dry bulb temperature",
          d: "None of these"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following statement is incorrect?",
        answers: {
          a: "Wet bulb temperature can be equal to dry bulb temperature",
          b: "Wet bulb temperature can never be higher than dry bulb temperature",
          c: "Flow of heat at muslin cloth take place through radiation and convection both",
          d: "Flow of heat at muslin cloth take place through convection only"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following statement is correct? ",
        answers: {
          a: "Flow of heat from air to bulb with wet muslin cloth is slower than the rate of heat loss from the bulb with wet muslin due to evaporation",
          b: "At wet bulb temperature, flow of heat from air to bulb with wet muslin cloth is equal to the rate of heat loss from the bulb with wet muslin due to evaporation",
          c: "Flow of heat from air to bulb with wet muslin cloth is higher than the rate of heat loss from the bulb with wet muslin due to evaporation",
          d: "Both a & b"
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
