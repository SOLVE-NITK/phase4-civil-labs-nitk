
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
        question: "For the same roadways roughness, area , length, and velocity condition, what is ratio of resistance of a square roadways to that of rectangular roadways having width : height ratio as 2:1?",
        answers: {
          a: "1:3",
          b: "3:1",
          c: "1:6",
          d: "6:1"
        },
        correctAnswer: "c"
    },
    {
        question: "A total quantity of 100 m3/min of air is passing through two splits. One air ways is 2.5m×1.5m and 100m long and other with similar lining is 2m×1.5m and 125m long. Calculate the quantity of air passing in each split.",
        answers: {
          a: "Q<sub>1</sub> = 55.37 m<sup>3</sup>/min, Q<sub>2</sub> = 40.63 m<sup>3</sup>/min",
          b: "Q<sub>1</sub> = 59.37 m<sup>3</sup>/min, Q<sub>2</sub> = 35.63 m<sup>3</sup>/min",
          c: "Q<sub>1</sub> = 59.37 m<sup>3</sup>/min, Q<sub>2</sub> = 40.63 m<sup>3</sup>/min",
          d: "None of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "The equivalent resistance in case of parallel connected ‘n’ number of airways when all have equal resistances is equal to ",
        answers: {
          a: "R/n<sup>3</sup>",
          b: "R/n<sup>2</sup>",
          c: "nR<sup>2</sup>",
          d: "nR"
        },
        correctAnswer: "b"
    },
    {
        question: "What is ratio of equivalent resistance connected in series to the parallel, when no of airways (N) and their resistance is same in both connection? ",
        answers: {
          a: "R<sub>series</sub>/R<sub>parallel</sub> = N<sup>2</sup>",
          b: "R<sub>series</sub>/R<sub>parallel</sub> = 1/N<sup>2</sup>",
          c: "R<sub>series</sub>/R<sub>parallel</sub> = 1/N<sup>3</sup>",
          d: "R<sub>series</sub>/R<sub>parallel</sub> = N<sup>3</sup>"
        },
        correctAnswer: "d"
    },
    {
        question: "If B is the no of branches and J is the no of junction in a ventilation network, then no equation required to solve network by Kirchhoff’s laws is equal to",
        answers: {
          a: "B+J+1",
          b: "B+J-1",
          c: "B-J-1",
          d: "B-J+1"
        },
        correctAnswer: "d"
    },
    {
      question: "If m is the no of mesh in a ventilation network, order of equation of polynomial required to solve network by Kirchhoff’s laws is equal to",
      answers: {
        a: "2<sup>(m-1)</sup>",
        b: "2<sup>(m+1)</sup>",
        c: "2<sup>(m)</sup>",
        d: "2<sup>(2m)</sup>"
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
