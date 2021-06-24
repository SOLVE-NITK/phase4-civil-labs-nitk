
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
        question: "What is the major drawback of this experiment?",
        answers: {
          a: "It does not take the cohesive soil not account",
          b: "It does not take capillary into account",
          c: "The test is very costly",
          d: "It does not take into account the shear force"
        },
        correctAnswer: "b"
    },
    {
        question: "Which instrument is used for putting soil into the cone?",
        answers: {
          a: "Spatula",
          b: "Conical flask",
          c: "spoon",
          d: "Pipette"
        },
        correctAnswer: "a"
    },
    {
        question: "The stopwatch should be started after________ ",
        answers: {
          a: "After first reading",
          b: "Inserting cone into cone stand",
          c: "Air densityPutting water onto the soil",
          d: "Putting soil on the cone"
        },
        correctAnswer: "c"
    },
    {
        question: "The test is majorly used for________",
        answers: {
          a: "To determine the site suitability for the waste-water treatment facility",
          b: "To determine the compatibility of soil for the foundation",
          c: "To determine the site suitability of the soil for the dam",
          d: "To determine the site suitability of the soil for the retaining wall"
        },
        correctAnswer: "a"
    },
    {
      question: "The reading of the graduated cylinder is_________",
      answers: {
        a: "The difference between lower meniscuses of the liquid",
        b: "The difference between the upper meniscuses of the liquid",
        c: "All of the above",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "Select the correct ascending order for the following steps_________I. Place the graduated cylinder below the funnel II. Take a funnel and put it on a funnel stand III. Take the soil sample and put it in the funnel",
      answers: {
        a: "I->II->III",
        b: "II->I->III",
        c: "III->II->I",
        d: "II->III->I"
      },
      correctAnswer: "b"
    },
    {
      question: "elect the correct descending order for the following steps_________ I. Take a known amount of quantity of water (say 100 ml) and pour it slowly over the soil in the funnel II. Start the stopwatch III. Note down the amount collected in the cylinder after a known time and fine the percolation rate of the sample ",
      answers: {
        a: "I->II->III",
        b: "II->I->III",
        c: "III->II->I",
        d: "II->III->I"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following apparatus is  NOT used in this experiment_________",
      answers: {
        a: "Spatula",
        b: "Funnel",
        c: "Conical flask",
        d: "Burette"
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
