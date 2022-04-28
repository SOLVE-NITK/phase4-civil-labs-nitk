
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
      question: "Which parameter remains same in series connected roadways?",
      answers: {
        a: "Pressure",
        b: "Quantity of air",
        c: "Resistance",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is true about series connected roadways?",
      answers: {
        a: "P = P<sub>1</sub>+P<sub>2</sub>+P<sub>3</sub>+…………………………+P<sub>n</sub>",
        b: "R<sub>equ</sub>  =  R<sub>1</sub>+ R<sub>2</sub>+ R<sub>3</sub>+………………………………+R<sub>n</sub>",
        c: "Q = Q<sub>1</sub>+Q<sub>2</sub>+Q<sub>3</sub>+……………………………………Q<sub>n</sub> ",
        d: "Both a & b"
      },
      correctAnswer: "d"
    },
    {
      question: "In general, which connection offer more resistance if number of individual resistance is same?",
      answers: {
        a: "Series",
        b: "Parallel",
        c: "Both offer same equivalent resistance",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
        question: "Which of the following is not a advantage of series connected airways?",
        answers: {
          a: "Series circuits are simple circuits as there are no splits",
          b: "There is a lesser need for Ventilation Control Devices (VCD) in particular regulators",
          c: "There are less chances of leakage of air",
          d: "Since the fresh air is not supplied to each district, it results in poor working conditions"
        },
        correctAnswer: "d"
      },

      {
        question: "Which of the following is not a advantage of parallel splitting  airways?",
        answers: {
          a: "The overall mine resistance is lower, thus air flows with much ease",
          b: "In case of fires/explosions in one panel, the production/operations in other panel is not affected",
          c: "They are more susceptible to leakage or recirculation",
          d: "They provide fresh air at every working place of a district"
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
