
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
      question: "What is shock loss?",
      answers: {
        a: "Loss in resistance",
        b: "Loss in velocity",
        c: "Loss in pressure",
        d: "Loss in quantity"
      },
      correctAnswer: "c"
    },
    {
      question: "Resistance is produced due",
      answers: {
        a: "Obstructions in airways",
        b: "Bends",
        c: "Change in cross-section areas ",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "What is law of continuity in a mine",
      answers: {
        a: "Same volume of airflow across airways",
        b: "Same velocity of air across airways",
        c: "Same pressure across airways",
        d: "None of the these"
      },
      correctAnswer: "a"
    },
    {
        question: "Shock loss is generally referred as",
        answers: {
          a: "Head loss",
          b: "Tail loss",
          c: "Velocity loss",
          d: "Quantity loss"
        },
        correctAnswer: "a"
      },

      {
        question: "A wooden material offers_______resistance compared to that metal or alloy",
        answers: {
          a: "Less resistance",
          b: "More resistance",
          c: "Equal resitance",
          d: "Cannot say"
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
