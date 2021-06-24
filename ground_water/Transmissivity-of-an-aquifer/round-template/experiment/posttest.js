
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
        question: "Why is the soil sample compacted to a bulk density similar to that of site from which the sample is obtained from? ",
        answers: {
          a: "To match the moisture content",
          b: "To give an accurate representation of the site soil as bulk density affects permeability",
          c: "To not change the void ratio from site",
          d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "What kinds of soils are suitable for Falling Head Permeability Test?",
        answers: {
          a: "Fine-grained soil",
          b: "Coarse-grained soil",
          c: "Clay soil",
          d: "Saturated soil"
        },
        correctAnswer: "c"
    },
    {
        question: "Why is a constant head maintained in constant head test?",
        answers: {
          a: "To ensure same velocity of water through the soil with respect to time",
          b: "To ensure the manometer readings are same",
          c: "To ensure the soil doesn’t get washed off",
          d: "All of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the standard temperature at which permeability is to be measured according to Indian Standards",
        answers: {
          a: "26 degree Celsius",
          b: "27 degree Celsius",
          c: "28 degree Celsius",
          d: "30 degree Celsius"
        },
        correctAnswer: "b"
    },
    {
      question: "What is the special property of the material used for filler disks",
      answers: {
        a: "Low permeability",
        b: "High Permeability",
        c: "None of the above",
        d: "All of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Darcy’s Law states that",
      answers: {
        a: "Velocity is proportional to hydraulic gradient",
        b: "Discharge rate is proportion to head",
        c: "Velocity is inversely proportional to hydraulic gradient",
        d: "Discharge rate is inversely proportional to head"
      },
      correctAnswer: "a"
    },
    {
      question: "Soils with hydraulic conductivity  between 10<sup>-5</sup> and 10<sup>-11</sup> are known as ",
      answers: {
        a: "Permeable Soil",
        b: "Semi Permeable Soil",
        c: "Impermeable Soil",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the relation between the texture of the soil and the hydraulic conductivity?",
      answers: {
        a: "Finer the soil higher the hydraulic conductivity ",
        b: "Finer the soil lower the hydraulic conductivity",
        c: "None of the above",
        d: "All of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Why is the water used for the test de-aired?",
      answers: {
        a: "In order to make sure the flow is as steady as possible ",
        b: "So that external particles don’t interfere in the test",
        c: "Maintain consistent density of water",
        d: "To remove impurities"
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
