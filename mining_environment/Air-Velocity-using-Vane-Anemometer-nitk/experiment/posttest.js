
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
        question: "What does vane anemometer calculates?",
        answers: {
          a: "Air velocity",
          b: "Distance",
          c: "Acceleration ",
          d: "Momentum "
        },
        correctAnswer: "b"
    },
    {
        question: "What is the range of Vane anemometer in mines? ",
        answers: {
          a: "01 – 05 m/sec",
          b: "01 – 10 m/sec",
          c: "01 – 15 m/sec ",
          d: "01 – 20 m/sec"
        },
        correctAnswer: "c"
    },
    {
        question: "The vanes are set an angle to the direction of air flow.  ",
        answers: {
          a: "0.795 radian",
          b: "0.785 radian",
          c: "Inclined 30 degree ",
          d: "45 degree to the direction of air "
        },
        correctAnswer: "b"
    },
    {
        question: "Axis of Vane anemometer should be in the  ",
        answers: {
          a: "Direction parallel to the Air",
          b: "Vertical to the direction of air ",
          c: "Both a & b",
          d: "Latent heat content of air"
        },
        correctAnswer: "a"
    },
    {
        question: "What does Digital Anemometer calculates ?",
        answers: {
          a: "Air velocity",
          b: "Distance",
          c: "Acceleration",
          d: "Momentum"
        },
        correctAnswer: "a"
    },
    {
        question: "Low range and high range Vane anemometer contains ____ blades.   ",
        answers: {
          a: "4 & 8",
          b: "2 & 4",
          c: "3 & 6 ",
          d: "5 & 10"
        },
        correctAnswer: "a"
    },
    {
        question: "Which factor is considered to obtain correct velocity ? ",
        answers: {
          a: "Atkinson factor ",
          b: "Method factor  ",
          c: "Dust factor",
          d: "Friction factor "
        },
        correctAnswer: "b"
    },
     
     {
        question: "Method factor depends on ___________.  ",
        answers: {
          a: "Size of the duct ",
          b: "Quantity of dust passing through the duct  ",
          c: "Air resistance with blade of vane anemometer ",
          d: "All of these "
        },
        correctAnswer: "a"
    },
    {
        question: "Approximate value of Method factor in mine is _______.  ",
        answers: {
          a: "0.75 ",
          b: "0.95 ",
          c: "1.55 ",
          d: "0.85 "
        },
        correctAnswer: "d"
    },
     {
        question: "What is the maximum quantity of air Vane anemometer can measure in a gallery of coal mine working under Board & Pillar method?  ",
        answers: {
          a: "216 m3/sec",
          b: "150.56 m3/sec",
          c: "183.6 m3/sec",
          d: "200.9 m3/sec "
        },
        correctAnswer: "c"
    },

  ];
// ---------------------------- End -------------------------------
  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
