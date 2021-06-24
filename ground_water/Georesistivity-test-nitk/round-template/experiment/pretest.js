
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
      question: "Which of the following is NOT an Electronic array Geometry?",
      answers: {
        a: "Wenner Array",
        b: "Pole- Dipole Array",
        c: "Dipole-Wenner Array",
        d: "Schlumberger Array"
      },
      correctAnswer: "c"
    },
    {
      question: "The unit of percolation rate of the soil is________",
      answers: {
        a: "Unitless",
        b: "g/cc ",
        c: "ml/s",
        d: "cm/s"
      },
      correctAnswer: "b"
    },
    {
      question: "Which IS code is used in this experiment?",
      answers: {
        a: "IS 1199:1959",
        b: "IS 15736:2007",
        c: "IS 800:2007",
        d: "IS 15658:2006"
      },
      correctAnswer: "b"
    },
    {
        question: "The ground resistivity calculated from measured resistance and a geometric factor derived for the condition where the ground is homogeneous and isotropic is",
        answers: {
          a: "Resistivity",
          b: "True Resistivity",
          c: "Resistivity imaging",
          d: "Apparent Resistivity"
        },
        correctAnswer: "d"
      },

      {
        question: "Which type of rock has the highest resistivity?",
        answers: {
          a: "Igneous rocks",
          b: "Sedimentary rocks",
          c: "Metamorphic rocks",
          d: "None of the above"
        },
        correctAnswer: "a"
      },
      {
        question: "Which type of rocks has the lowest resistivity?",
        answers: {
          a: "Igneous rocks",
          b: "Sedimentary rocks",
          c: "Metamorphic rocks",
          d: "None of the above"
        },
        correctAnswer: "b"
      }, {
        question: "In the Schlumberger array, the electrodes are placed at equal distances?",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "b"
      }, {
        question: "Ohm's law states that the current through a conductor between two points is inversely proportional to the voltage across the two points",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "b"
      },
      {
        question: "The positive terminal of the battery is known as",
        answers: {
          a: "Anode",
          b: "Cathode",
          c: "Electrode",
          d: "None of the above"
        },
        correctAnswer: "a"
      },
      {
        question: "The positive terminal of the battery is known as",
        answers: {
          a: "Anode",
          b: "Cathode",
          c: "Electrode",
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
