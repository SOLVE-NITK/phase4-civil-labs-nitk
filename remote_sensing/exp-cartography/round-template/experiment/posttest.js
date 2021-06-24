
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
      question: "Which cartography maps show the oceans and continents of the world?",
      answers: {
        a: "Physical",
        b: "Population density",
        c: "Political",
        d: "Tidal"
      },
      correctAnswer: "a"
    },
    {
      question: "The amount of information to be represented on the map depends on __.",
      answers: {
        a: "Scale",
        b: "Projection",
        c: "None of the above",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "The cadastral maps, topographical maps and the city plans come under the category of ____.",
      answers: {
        a: "Large scale maps",
        b: "Medium scale maps",
        c: "Small scale maps",
        d: "All of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "When different objects are shown by various colours, the map is known as",
      answers: {
        a: "Choro-schematic",
        b: "Chorochromatic",
        c: "Choropleth",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "What does 1mm on a map drawn at a scale of 1:50,000 represent on the ground?",
      answers: {
        a: "500 centimetres",
        b: "5 metres",
        c: "50 centimetres",
        d: "50 metres"
      },
      correctAnswer: "d"
    },
    {
      question: "The Prime Meridian runs through Moscow.",
      answers: {
        a: "True",
        b: "False",
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
