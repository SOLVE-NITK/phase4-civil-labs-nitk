
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
        question: "During development of mine, operating points should preferably lie___________",
        answers: {
          a: "Left of the peak of the efficiency curve",
          b: "Right of the peak of the efficiency curve",
          c: "Above of the peak of efficiency curve",
          d: "Independent of the condition of mine"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following statement is incorrect?",
        answers: {
          a: "Operating point must lie right to the stall point for better performance of fan",
          b: "Operating point must lie left to the stall point for better performance of fan",
          c: "Stall point is the point of reverse flexure",
          d: "At stall point, fluctuations of air velocity of fan occur"
        },
        correctAnswer: "b"
    },
    {
        question: "If the impeller diameter of fan and air density is assumed to be constant and n is rotational speed of fan, P is fan drift pressure. Which of the following is correct? ",
        answers: {
          a: "P ∝ n",
          b: "P ∝ 1/n",
          c: "P ∝ n<sup>2</sup>",
          d: "P ∝ 1/n<sup>2</sup>"
        },
        correctAnswer: "b"
    },
    {
        question: "For varying impeller diameter of a fan but with constant speed and air density",
        answers: {
          a: "Quantity varies as the cube of the impeller diameter",
          b: "Pressure varies as the square of the impeller diameter",
          c: "Power varies as the fifth power of the impeller diameter",
          d: "Efficiency is not constant"
        },
        correctAnswer: "d"
    },
    {
        question: "Air flow of a fan do not depend on________ ",
        answers: {
          a: "Rotational speed of fan",
          b: "Impeller diameter",
          c: "Air density",
          d: "Fan drift pressure"
        },
        correctAnswer: "c"
    },
    {
        question: "What is Air Power?",
        answers: {
          a: "Efficiency × Input power of fan",
          b: "Pressure × Air flow",
          c: "Pressure ×  (Air flow)<sup>2</sup>",
          d: "Both a & b"
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
