
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
    question: "The distance covered by one degree of latitude is_____.",
    answers: {
      a: "69km",
      b: "68m",
      c: "79km",
      d: "69miles"
    },
    correctAnswer: "d"
  },

  {
    question: "What is the equivalence of one degree of longitude?",
    answers: {
      a: "4minutes",
      b: "2 hour",
      c: "15minutes",
      d: "20minutes"
    },
    correctAnswer: "a"
  },

  {
    question: "Which of these maps depicts the Earth as spherical?",
    answers: {
      a: "Blauver map",
      b: "Thematic maps",
      c: "Globe",
      d: "Topo map"
    },
    correctAnswer: "c"
  },
  {
    question: "Longitudinal line is also called as _____ .",
    answers: {
      a: "Reference line",
      b: "Meridian",
      c: "Parallel",
      d: "Middle line"
    },
    correctAnswer: "b"
  },
  {
    question: "A person who designs maps is called ___ .",
    answers: {
      a: " Cartographe",
      b: "Cartographer",
      c: "Mapper",
      d: "Spotter"
    },
    correctAnswer: "b"
  },
  {
    question: "What does the abbreviation GPS stand for?",
    answers: {
      a: "Global Positioning System",
      b: "Global Point Selection",
      c: "Geographical Point Software",
      d: "Geographical Position System"
    },
    correctAnswer: "a"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
