
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
      question: "The liquid limit can be defined as the arbitrary limit of water content at which the soil is just about to pass from the _____ state into the _____ state.",
      answers: {
        a: "Liquid to solid",
        b: "Plastic to solid",
        c: "Liquid to plastic",
        d: "Plastic state to liquid"
      },
      correctAnswer: "d"
    },

    {
      question: "The plastic limit is the water content where soil starts to exhibit_____ behaviour.",
      answers: {
        a: "Liquid",
        b: "Semi solid",
        c: "Plastic",
        d: "solid"
      },
      correctAnswer: "c"
    },

    {
      question: "The codebook referred for conducting liquid limit, and the plastic limit is _____.",
      answers: {
        a: "IS : 2720 part 5 1985",
        b: "IS : 2720 part 5 1975",
        c: "IS : 2720 part 6 1975",
        d: "IS : 2720 part 6 1985"
      },
      correctAnswer: "a"
    },
    {
        question: "Plasticity index can be calculated by ______ .",
        answers: {
          a: "Ip = PL – LL",
          b: "Ip = LL – PL ",
          c: "Ip = PL + LL",
          d: "Ip = LL + PL"
        },
        correctAnswer: "b"
      },
    {
        question: "If the value of the liquid limit is less than 35%, then the compressibility is _______.",
    answers: {
          a: "High",
          b: "Intermediate",
          c: "Low",
          d: "None of the above"
        },
        correctAnswer: "c"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
