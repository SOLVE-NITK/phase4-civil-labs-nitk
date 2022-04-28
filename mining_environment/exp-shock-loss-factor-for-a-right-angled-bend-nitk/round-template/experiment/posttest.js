
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
        question: "Which of the following parameter will affect the pressure drop due to shock loss in the mine?",
        answers: {
          a: "Total pressure drop in the mine",
          b: "Frictional pressure drop in the mine",
          c: "Both a & b",
          d: "None of these "
        },
        correctAnswer: "c"
    },
    {
        question: "On the basis of above experiment, which of the following parameters are not going to change on increasing the volume of the air?",
        answers: {
          a: "Velocity of air flow",
          b: "Total pressure drop",
          c: "Frictional pressure drop",
          d: "None of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following statement is false?",
        answers: {
          a: "Shock loss factor is directly proportional to the P<sub>shock</sub>",
          b: "Shock loss factor is inversely proportional to the square of the area of the cross section of the duct",
          c: "Shock loss factor is inversely proportional to the square of the quantity of air flow through the duct.",
          d: "Shock loss factor is inversely proportional to density of the air"
        },
        correctAnswer: "b"
    },
    {
        question: "What are the processes which leads to the development of Shock loss pressure at the bends?",
        answers: {
          a: "Nature of the roughness of the roadways",
          b: "Type of rubbing surface",
          c: "Resistance of the roadway",
          d: "All of them"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following have the largest Equivalent length of bends?",
        answers: {
          a: "Sharp bend, acute",
          b: "Rounded  bend, acute",
          c: "Sharp bend, right angle",
          d: "Sharp bend, obtuse angle"
        },
        correctAnswer: "a"
    },

  ];
// ---------------------------- End -------------------------------
  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
