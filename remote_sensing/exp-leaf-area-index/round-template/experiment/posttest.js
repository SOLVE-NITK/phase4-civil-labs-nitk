
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
      question: "The study of LAI is called _____",
      answers: {
        a: "Photometry",
        b: "Photology",
        c: "Phyllometry",
        d: "Phyllogy"
      },
      correctAnswer: "a"
    },
    {
      question: "Indirect Methods of LAI Estimation are Non Destructive in nature. Say True or False",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "The disadvantage of the direct method of estimating LAI is that it is",
      answers: {
        a: "Destructive",
        b: "Time consuming",
        c: "Expensive",
        d: "All of the Above"
      },
      correctAnswer: "d"
    },
    {
      question: "The disadvantage of the indirect method is that in some cases it can ___the value of LAI in very dense canopies",
      answers: {
        a: "Underestimate",
        b: "Overestimate"
      },
      correctAnswer: "a"
    },
    {
      question: "The Leaf Area Index is thus an important indicator of",
      answers: {
        a: "Radiation",
        b: "Precipitation interception",
        c: "Energy conversion and water balance",
        d: "All of the Above"
      },
      correctAnswer: "d"
    },
    {
      question: "Optimum LAI for Apple ranges from",
      answers: {
        a: "0 to 5",
        b: "1 to 10",
        c: "1.5 and 5",
        d: "7 to 10"
      },
      correctAnswer: "c"
    },
    {
      question: " ____ uses the relationship between biomass and the leaf area to calculate the LAI.",
      answers: {
        a: "Planimetric method",
        b: "Gravimetric method",
        c: "Inclined point quadrat Method",
        d: "Leaf measurement method"
      },
      correctAnswer: "b"
    },
    {
      question: "LAI of ____ is good for tomatoes",
      answers: {
        a: "1 to 2",
        b: "1 to 3",
        c: "3 to 4",
        d: "0 to 3"
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
