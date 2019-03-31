// I am creating a questions and answers object for best organization
var questions = [
    {
        question: 'What is the seventh and final novel of the Harry Potter series',
        answers: [
            { answer: 'A. ,Harry Potter and The Prisioner of Azkaban', value: false }, 
            { answer: 'B. Harry Potter and The Goblet of Fire', value: false },
            { answer: 'C. Harry Potter and The Deathly Hallows', value: true },
            { answer: 'D. Harry Potter and The Order of The Phoenix', value: false }
        ]
    },
    {
        question: 'Victorian writers Charlotte, Emily, and Anne were sisters sharing what last name?',
        answers: [
            { answer: 'Watts', value: false},
            { answer: 'Brontë', value: true },
            { answer: 'Bougatt', value: false },
            { answer: 'Weller', value: false }
        ]
    },
    {
        question: 'Released on April 5, 1974, what was Stephen King’s first published novel?',
        answers: [
            { answer: 'The Stand', value: false},
            { answer: 'IT', value: false },
            { answer: 'Pet Sematary', value: false },
            { answer: 'Carrie', value: true }
        ]
    },
    {
        question: 'Where would one arrive at the second star to the right, and straight on till morning?',
        answers: [
            { answer: 'Neverland', value: true },
            { answer: 'Lilo & Stich', value: false },
            { answer: 'The Mermaid', value: false },
            { answer: 'Lady & The Tramp', value: false }
        ]
    },
    {
        question: 'Thus Spoke Zarathustra: A Book for All and None is a philosophical novel written by which German philosopher?',
        answers: [
            { answer: 'Soren Kierkegaard', value: false},
            { answer: 'Jean-Paul Sartre', value: false },
            { answer: 'Friedrich Nietzsche', value: true },
            { answer: 'Karl Marx', value: false }
        ]
    },
    {
        question: 'Oliver Twist was the second novel published by which English author?',
        answers: [
            { answer: 'Daniel Defoe', value: false},
            { answer: 'George Eliot', value: false },
            { answer: 'Charles Dickens', value: true },
            { answer: 'Anthony Trollope', value: false }
        ]
    },
    {
        question: 'In Frank Baum’s novel The Wonderful Wizard of Oz, on which the film is based, what color are Dorothy’s slippers?',
        answers: [
            { answer: 'Green', value: false},
            { answer: 'Gray', value: false },
            { answer: 'Silver', value: true },
            { answer: 'Gold', value: false }
        ]
    },
    {
        question: 'What is the secret identity of the fictional superhero Batman?',
        answers: [
            { answer: 'Thor Odinson', value: false},
            { answer: 'Steve Rogers', value: false },
            { answer: 'Bruce Banner', value: false },
            { answer: 'Bruce Wayne', value: true }
        ]
    },
    {
        question: 'Who was the author of the children’s fantasy novel The Lion, the Witch and the Wardrobe?',
        answers: [
            { answer: 'Wayne Thomas Batson', value: false},
            { answer: 'J.K Rowling', value: false },
            { answer: 'C.S. Lewis', value: true },
            { answer: 'Lloyd Alexander', value: false }
        ]
    },
    {
        question: 'In the Harry Potter series, what is the name of Harry’s pet owl?',
        answers: [
            { answer: 'Hedwig', value: true },
            { answer: 'Scabbers', value: false },
            { answer: 'Crookshanks', value: false },
            { answer: 'Trevor', value: false }
        ]
    },
    {
        question: 'The novel Don Quixote was written by which famous Spanish novelist?',
        answers: [
            { answer: 'Benito Perez Galdos', value: false},
            { answer: 'Miguel Unamuno', value: false },
            { answer: 'Miguel de Cervantes', value: true },
            { answer: 'Lope de Vega', value: false }
        ]
    },
    {
        question: 'Which American writer wrote the narrative poem “The Raven”?',
        answers: [
            { answer: 'Edgar Allan Poe', value: true },
            { answer: 'William Golding', value: false },
            { answer: 'Oscar Wilde', value: false },
            { answer: 'Emily Dickinson', value: false }
        ]
    }
    
]
//Now we are going to initialize and declare global variables
var questions;
var counter = 0;
var clock;
var timer = 20;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
$(document).ready(function() {
    // Start the game when that start button is clicked
    $('.answers').css('visibility', 'hidden');
    $('body').on('click', '.start-btn', function(event) {
      event.preventDefault();
      startGame();
      $('.answers').css('visibility', 'visible');
    });
  
    $('body').on('click', '.answer', function(event) {
      // console.log($(this));
      chosenAnswer = $(this).text();
      var answerCounter = questions[counter].answers;
  
      var answer = $('.answer');
      for (var i = 0; i < answerCounter.length; i++) {
        if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === true) {
          clearInterval(clock);
          var right = $(this).attr('class', 'right-answer answer');
          rightAnswer();
        } else if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === false) {
          clearInterval(clock);
          $(this).attr('class', 'wrong-answer answer');
          $('.first-answer').css('background-color', 'green');
          $('.first-answer').css('color', 'white');
          wrongAnswer();
        }
      }
    });
  
    $('body').on('click', '.reset-button', function(event) {
      event.preventDefault();
      resetGame();
    });
  });
  
  function rightAnswer() {
    correctAnswer++;
    $('.time').html(timer);
    $('.right').html('<p>Right answers: ' + correctAnswer + '</p><br>');
    setTimeout(questionCounter, 2000);
  }
  
  function wrongAnswer() {
    incorrectAnswer++;
    $('.time').html(timer);
    $('.wrong').html('<p>Wrong answers: ' + incorrectAnswer + '</p>');
    setTimeout(questionCounter, 2000);
  }
  
  function unanswered() {
    unanswered++;
    $('.main').append("<p class='times-up'>Time's up!</p>");
    $('.right-answer').css('background-color', 'green');
    $('.times-up')
      .delay(2000)
      .fadeOut(400);
    setTimeout(questionCounter, 2000);
  }
  
  // Start the game
  function startGame() {
    $('.start-page').css('display', 'none');
    $('.questions-page').css('visibility', 'visible');
    $('.timer').html('<p>Time remaining: <span class="time">30</span></p>');
  
    $('.question').html(questions[counter].question);
    var showingAnswers =
      '<p class="answer first-answer">' +
      questions[counter].answers[0].answer +
      '</p><p class="answer">' +
      questions[counter].answers[1].answer +
      '</p><p class="answer">' +
      questions[counter].answers[2].answer +
      '</p><p class="answer">' +
      questions[counter].answers[3].answer +
      '</p>';
  
    $('.answers').html(showingAnswers);
  
    timerHolder();
  }
  
  function questionCounter() {
    if (counter < 11) {
      counter++;
      startGame();
      timer = 30;
      timerHolder();
    } else {
      finishGame();
    }
  }
  
  // Timer function
  function timerHolder() {
    clearInterval(clock);
    clock = setInterval(seconds, 1000);
    function seconds() {
      if (timer === 0) {
        clearInterval(clock);
        unanswered();
      } else if (timer > 0) {
        timer--;
      }
      $('.time').html(timer);
    }
  }
  
  // Finishing the game
  function finishGame() {
    var final = $('.main')
      .html("<p>All done, here's how you did!<p><br><br>")
      .append('<p>Correct Answers: ' + correctAnswer + '</p><br>')
      .append('<p>Wrong Answers: ' + incorrectAnswer + '</p>');
    $(final).attr('<div>');
    $(final).attr('class', 'final');
    $('.final').append('<p><a class="btn btn-primary btn-lg reset-button" href="#">Restart the game!</a></p>');
  }
  
  // Reset the game
  function resetGame() {
    counter = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    timer = 30;
    startGame();
    timerHolder();
  }
 