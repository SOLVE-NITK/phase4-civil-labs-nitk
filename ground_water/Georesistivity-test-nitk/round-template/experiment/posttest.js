
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
        question: "Which of the following Electronic array Geometry is used in this experiment?",
        answers: {
          a: "Wenner Array",
          b: "Pole-Dipole Array",
          c: "Dipole-Dipole Array",
          d: "Schlumberger Array"
        },
        correctAnswer: "b"
    },
    {
        question: "According to IS 15736:2007, what is the range of resistivity (in Ohm-m) for groundwater?",
        answers: {
          a: "10-100",
          b: "10-800",
          c: "10-1000",
          d: "10-8000"
        },
        correctAnswer: "a"
    },
    {
        question: "In the experiment, the inner electrodes are current electrodes and it causes the flow of current ",
        answers: {
          a: "True",
          b: " False",
        },
        correctAnswer: "b"
    },
    {
        question: "The apparent resistance depends on",
        answers: {
          a: "Potential drop",
          b: "Flow of current",
          c: "Distance between the electrodes",
          d: "All of the above"
        },
        correctAnswer: "a"
    },
    {
      question: "The apparent resistivity measured in",
      answers: {
        a: "Ohm",
        b: "Mho",
        c: "Ohm-m",
        d: "Siemen-m"
      },
      correctAnswer: "c"
    },
    {
      question: "In general, the depth of the soil sample is",
      answers: {
        a: "One-eight to the distance between current electrodes",
        b: "One-sixth to the distance between current electrodes",
        c: "One-fourth to the distance between current electrodes",
        d: "One-third to the distance between current electrodes"
      },
      correctAnswer: "d"
    },
    {
      question: "The voltmeter is used for measuring the current ",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The terminals P1 and P2 in the georesistivity meter are connected to",
      answers: {
        a: "Current Electrode",
        b: "Potential Electrodes",
        c: "Battery",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "The terminals C1 and C2 in the georesistivity meter are connected to",
      answers: {
        a: "Current Electrode",
        b: "Potential Electrodes",
        c: "Battery",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of the following instrument is NOT used in this test ",
      answers: {
        a: "Battery",
        b: "Stopwatch",
        c: "Hammer",
        d: "Electrodes"
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
