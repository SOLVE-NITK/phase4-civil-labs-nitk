
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
      question: "Constant head permeability test can be used for ___________",
      answers: {
        a: "Coarse-grained soil",
        b: "Highly permeable soil",
        c: "Clayey soil",
        d: "All of the mentioned"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following formula is used in Constant head permeability test?",
      answers: {
        a: "Jacky’s formula ",
        b: "Louden’s formula ",
        c: "Darcy’s law",
        d: "Kozney’s formula"
      },
      correctAnswer: "c"
    },
    {
      question: "In constant head permeability test apparatus, the water head at any time instant is equal to ____________",
      answers: {
        a: "Difference in the water level in manometers",
        b: "Cross-sectional area of pipe",
        c: "Height of permeameter",
        d: "None of the mentioned"
      },
      correctAnswer: "a"
    },
    {
        question: "In constant permeability test, the length of specimen is measured by ___________",
        answers: {
          a: "Calculating the difference in water level",
          b: "Using Piezometric tube",
          c: "Using measuring scale",
          d: "None of the mentioned"
        },
        correctAnswer: "b"
      },

      {
        question: "The constant head permeability test is used for ___________",
        answers: {
          a: "Fine-grained soil",
          b: "Coarse-grained soil",
          c: "Clay soil",
          d: "Saturated soil"
        },
        correctAnswer: "b"
      },
      {
        question: "The laboratory observation constant head test consist of measurements of ____________",
        answers: {
          a: "h1 at an interval of t1 and h2 at an interval of t2",
          b: "Only t1 and t2",
          c: "Delta H and discharge Q",
          d: "All of the mentioned"
        },
        correctAnswer: "c"
      }, {
        question: "Which of the following tubes are used in the constant head test?",
        answers: {
          a: "Inlet tube",
          b: "Overflow tube",
          c: "Outlet tube",
          d: "All of the mentioned"
        },
        correctAnswer: "d"
      }, {
        question: "What is the range of permeability of sandy soil in cm/hr",
        answers: {
          a: "0.001 to 0.01",
          b: "0.01 to 0.1",
          c: "0.1 to 1",
          d: "1 to 10"
        },
        correctAnswer: "d"
      }, {
        question: "What is the device used to measure the head difference in the permeameter",
        answers: {
          a: "Manometer",
          b: "Barometer",
          c: "Hydrometer",
          d: "Anemometer"
        },
        correctAnswer: "a"
      },
      {
        question: "Why is a steady flow in outlet important while conducting the experiment?",
        answers: {
          a: "To ensure laminar flow",
          b: "To make sure the velocity of water through the soil is constant at all sections",
          c: "To ensure the inflow of water has constant head",
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
