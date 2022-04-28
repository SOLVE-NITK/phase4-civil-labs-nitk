
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
        question: "If resistance of the mine gallery is kept constant and P is pressure difference and Q is quantity of air flow, then which of the following is true?",
        answers: {
          a: "P∝Q",
          b: "P∝1/Q",
          c: "P∝Q<sup>2</sup>",
          d: "P∝Q<sup>3</sup>"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the unit of Atinkson’s  friction factor?",
        answers: {
          a: "Ns<sup>2</sup>m<sup>4</sup>",
          b: "Ns<sup>2</sup>/m<sup>8</sup",
          c: "Kg/m<sup>3</sup>",
          d: "Both a & c"
        },
        correctAnswer: "d"
    },
    {
        question: "Resistance of the mine R varies with area of cross section A in _________",
        answers: {
          a: "R∝A<sup>2</sup>",
          b: "R∝1/A<sup>2</sup>",
          c: "R∝A<sup>3</sup>",
          d: "R∝1/A<sup>3</sup>"
        },
        correctAnswer: "d"
    },
    {
        question: "Coefficient of friction of airways depend on  ",
        answers: {
          a: "Nature of the roughness of the roadways",
          b: "Type of rubbing surface",
          c: "Resistance of the roadway",
          d: "All of them"
        },
        correctAnswer: "b"
    },
    {
        question: "Resistance coefficient depend on",
        answers: {
          a: "Nature of the roughness of the roadways",
          b: "Type of rubbing surface",
          c: "Resistance of the roadway",
          d: "All of them"
        },
        correctAnswer: "a"
    },
    {
        question: "If air density is assumed to be constant, Darcy Weisbach resistance coefficient (λ) varies with Atinkson’s  friction factor (K) as   ",
        answers: {
          a: "K∝1/λ",
          b: "K∝λ",
          c: "K∝1/λ<sup>2</sup>",
          d: "K∝λ<sup>2</sup>"
        },
        correctAnswer: "b"
    },
    {
        question: "1 Weisbach is equal to  ",
        answers: {
          a: "1 Kilomurg",
          b: "9.8 Ns<sup>2</sup>/m<sup>8</sup>",
          c: "164 Atkinsons ",
          d: "All of the above"
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
