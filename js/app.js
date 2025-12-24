$(document).foundation();

$( document ).ready(function() {

  // initial variables
  var validationPassed = true;
  const quizContainer = $('#quiz');
  const resultsContainer = $('#results');
  const buttonContainerHTML = $('#buttons')[0].outerHTML;

  // remove the button container from the DOM once HTML is stored
  $('#buttons').remove();

  const myQuestions = [
    {
      heading: "musical",
      questionAlt: "Caitlin and Greg looking starstruck, holding photos of Myron outside the performance venue",
      answerAlt: "Myron staring into the distance, with other kids waving scarves around him during the performance",
      question: "What musical did Myron’s school put on this spring? ",
      answers:{
        a: "The Wizard of Oz",
        b: "Hair",
        c: "Finding Nemo",
        d: "Shrek"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "poet",
      questionAlt: "Our friend, Max reading a poem in front of a set table, with guests standing around the table",
      answerAlt: "Guests gathered around the table",
      question: "Emily, Mike and Myron attended our friend, Max’s dinner party honoring which 18th century poet?",
      answers:{
        a: "William Blake ",
        b: "Robert Burns",
        c: "William Wordsworth ",
        d: "Johann Wolfgang von Goethe"
      },
      correctAnswer: "b",
      correctness: false,
      link: "https://en.wikipedia.org/wiki/Burns_supper",
      linkText: "Learn more about the Scottish Burns Supper tradition"
    },
    {
      heading: "sport",
      questionAlt: "Myron with underwear on his head",
      answerAlt: "Mike and Myron in posed official tee ball photo, proving they did participate in tee ball.",
      question: "What sport did Myron <strong>not</strong> participate in this year?",
      answers:{
        a: "tee ball",
        b: "rock climbing",
        c: "karate",
        d: "basketball"
      },
      correctAnswer: "d",
      correctness: false,
      linkText: "See, we played tee ball. After one season, Myron declared he no longer wanted to participate in ball sports."
    },
    {
      heading: "badge",
      questionAlt: "Myron in a desert landscape, dumping something out of his shoe",
      answerAlt: "Myron sporting his junior ranger badge",
      question: "Myron received his Junior Ranger Badge after visiting which national park this spring?",
      answers:{
        a: "Canyon of the Ancients",
        b: "Mesa Verde",
        c: "Joshua Tree",
        d: "Grand Canyon"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "mall",
      questionAlt: "Close-up photo of Secret Mall Apartment film poster, with Emily's name visible in the credits",
      answerAlt: "Still image from Secret Mall Apartment film, with Colin showing part of the model he made of the Providence Place Mall and the secret apartment",
      question: "In March, Secret Mall Apartment had its national debut at the Providence Place Mall. Over the course of the year it became the 8th top grossing documentary of 2025, narrowly beating out which other Documentary?",
      answers:{
        a: "Cheech and Chong's Last Movie",
        b: "No Other Land",
        c: "CatVideoFest 2025",
        d: "Taylor Swift: the Official Release Party of a Showgirl"
      },
      correctAnswer: "a",
      correctness: false,
      link: "https://www.the-numbers.com/market/2025/genre/Documentary",
      linkText: "Domestic Box Office Performance for Documentary Movies in 2025"
    },
    {
      heading: "work",
      questionAlt: "Photo of a whiteboard with the text, 'Please consult your scum master before having kittens do your coding. Too late. They are doing it right meow. Cats write purrrrrrl.'",
      answerAlt: "Molly standing on top of a laser printer",
      question: "Despite the current political environment, Mike continues to work on software for which federal government agency / department?",
      answers:{
        a: "Veterans Affairs",
        b: "Department of Education",
        c: "Centers for Medicare and Medicaid Services",
        d: "The Corporation for National and Community Service"
      },
      correctAnswer: "c",
      correctness: false
    },
    {
      heading: "award",
      questionAlt: "Em seated on a balcony and smiling at the camera",
      answerAlt: "A printed award certificate that says, 'OCCR Preesnts: AppleFest 2025. This certificate is awarded to Emily Ustach for winning first place in the best presentation category fo AppleFest 2025. Awarded October 28, 2025.'",
      question: "What award did Emily win this year?",
      answers:{
        a: "'Best Documentary' at the Rhode Island International Film Fest",
        b: "'Best Presentation' at AppleFest bake-off 2025",
        c: "'Best Trunk' in the Edgewood Trunk or Treat ",
        d: "'Most Patient' in the Engstach Household"
      },
      correctAnswer: "b",
      correctness: false
    },
    {
      heading: "ride",
      questionAlt: "Myron riding a steel cutout silhouette of a sheepdog in a park",
      answerAlt: "Myron and Mike riding a roller coaster at Storybook Land",
      question: "What did Myron ride on for the first time this year?",
      answers:{
        a: "A horse",
        b: "A donkey",
        c: "A bumper car",
        d: "A roller coaster"
      },
      correctAnswer: "d",
      correctness: false,
      linkText: "Grammy K took us to Storybok Land!"
    },
    {
      heading: "collection",
      questionAlt: "Molly walking on Myron's back while Myron reads a book in his bed",
      answerAlt: "A rock with Pikachu painted on it, as well as the text, 'Gotta rock em all'",
      question: "What item did Myron get his first of from a friend this year and then begin to collect?",
      answers:{
        a: "Magic, the Gathering cards",
        b: "Baseball cards",
        c: "Stamps",
        d: "Pokémon cards"
      },
      correctAnswer: "d",
      correctness: false
    },
    {
      heading: "aquarium",
      questionAlt: "Aquarium snail on plant",
      answerAlt: "Aquarium snail riding on the thermometer, which is floating in the water",
      question: "We got a new aquarium. What did we collectively name the snails?",
      answers:{
        a: "The Comin’ in Hot Crew",
        b: "The Slowbros",
        c: "Marcel the Shells",
        d: "Shells Silverstein"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "train",
      questionAlt: "Steam train pulling its cars around a bend on a cliff",
      answerAlt: "Jeanne, Mike, Em, and Myron in a posed photo on the train, with a frame that says, 'Wanted: dead or alive'",
      question: "We went on a steam train ride in Colorado with Jeanne. How did we get a free upgrade to first class?",
      answers:{
        a: "Myron told a joke",
        b: "We got a random bonus ticket",
        c: "Mike wore a Santa Clara Vanguard shirt",
        d: "Jeanne knew the conductor"
      },
      correctAnswer: "c",
      correctness: false,
      linkText: "The conductor was a former Blue Devil, and he was excited to see someone representing the drum and bugle corps activity. We had a beautiful ride in a car with a glass roof."
    }
  ]

  // sets height of parent element to correct layout since there is absolute positioning involved
  function setQuizHeight(){
    divHeight = $('.active-slide').height();
    // set to 0 if undefined (happens if .active-slide is not present, like at end)
    if (typeof divHeight === 'undefined'){
      divHeight = 0;
    }
    $('#quiz').css({'height' : divHeight});
  }

  // avoiding some repetition when building html for respnsive images
  function responsiveImage(imgname, alt){
    return(`
      <img
         alt="${alt}"
         src="img/${imgname}_m.jpeg"
         srcset="
            img/${imgname}_s.jpeg 600w,
            img/${imgname}_m.jpeg 1096w,
            img/${imgname}_l.jpeg 1284w,
            img/${imgname}_xl.jpeg 1540w,
         "
         sizes="
         (min-width: 1136px) 1096px,
         (min-width: 2048px) 1284px,
         (min-width: 2430px) 1540px,
         100vw
         "
      >
    `);
  }


  // build quiz and show results functions
  function buildQuiz(){
    const output = [];

    const questionsLength = myQuestions.length;

    //for each question
    myQuestions.forEach((currentQuestion, questionNumber)=> {

        //human centered question number
        const thisQuestionNumber = questionNumber+1;

        //variable to store possible answers
        const answers =[];

        //for each available answers
        for(letter in currentQuestion.answers){

          //add html radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}" disabled>
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // get the image tag using this function
        const imageTag = responsiveImage(currentQuestion.heading+"-question", currentQuestion.questionAlt);

        //add this question and its answers to the output
        output.push(
          `<div class="slide grid-x grid-padding-x">
            <div class="large-12 cell subheader" id="progress">
              #${thisQuestionNumber} out of ${questionsLength}
            </div>
            <h2 class="heading large-12 cell question-title">
              ${currentQuestion.heading}
            </h2>
            <div class="question-image large-8 medium-6 small-12 cell">
              ${imageTag}
            </div>
            <div class="question-business large-4 medium-6 small-12 cell">
              <div class="question">
                ${currentQuestion.question}
              </div>
              <div class="form-error">
                That's not a choice. Please make a choice before continuing. These are your options.
              </div>
              <div class="answers">
                ${answers.join('')}
              </div>
            </div>
          </div>`
        );
      }
    );

    // combine our output list into one string of HTML and put it on the page
    quizContainer.html(output.join(''));

    // set quiz height initially
    setQuizHeight();
  }

  function showResults(){
    //go no further if we haven't passed validation
    validation();
    if(validationPassed == false){
      return false;
    }

    //remove min height so we can make the quiz disappear
    $('.minheight').removeClass('minheight');

    //reset heading
    $('#title').html('Results');

    // gather answers from our quiz
    const answerContainers = $('.answers');

    //keep track of user's answers
    let numCorrect = 0;

    // build HTML of all questions and answers
    const output = [];

    // for each question
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // resetting correctness attribute
      currentQuestion['correctness'] = false;

      // get the image tag using this function
      const imageTag = responsiveImage(currentQuestion.heading+"-answer", currentQuestion.questionAlt);

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;

          // set object as correct
          currentQuestion['correctness'] = true;

          // add question and answer to output
          output.push(
            `<div class="result-slide grid-x grid-padding-x correct" id="question-${questionNumber}">
              <h2 class="heading large-12 cell question-title">
                ${currentQuestion.heading}:
                <span class="indicator">
                  Correct
                </span>
              </h2>
              <div class="answer-image large-8 medium-6 small-12 cell">
                ${imageTag}
              </div>
              <div class="answer-business large-4 medium-6 small-12 cell">
                <div class="question">
                  ${currentQuestion.question}
                </div>
                <div class="user-answer">
                  <span class="answer-label">Your answer</span>, "${currentQuestion.answers[userAnswer]}": <span class="indicator">Correct</span>
                </div>
              </div>
            </div>`
          )
      }
      else{
          // if answer incorrect
          // set object as incorrect
          currentQuestion['correctness'] = false;

          // add question and answer to output
          output.push(
            `<div class="result-slide grid-x grid-padding-x incorrect" id="question-${questionNumber}">
              <h2 class="heading large-12 cell question-title">
                ${currentQuestion.heading}:
                <span class="indicator">
                  Incorrect
                </span>
              </h2>
              <div class="answer-image large-8 medium-6 small-12 cell">
                ${imageTag}
              </div>
              <div class="answer-business large-4 medium-6 small-12 cell">
                <div class="question">
                  ${currentQuestion.question}
                </div>
                <div class="user-answer">
                  <span class="answer-label">Your answer</span>, "${currentQuestion.answers[userAnswer]}": <span class="indicator">Incorrect</span>
                </div>
                <div class="correct-answer">
                  <span class="answer-label">Correct answer:</span> "${currentQuestion.answers[currentQuestion.correctAnswer]}"
                </div>
              </div>
            </div>`
          )
      }

    }); // end of foreach


    // remove active slide class to hide the last question
    $('.active-slide').removeClass('active-slide');
    setQuizHeight();

    // hide all the buttons
    $('#previous').addClass('hide');
    $('#submit').addClass('hide');

    // hide the quizParent
    $('#quizParent').addClass('hide');

    //calculate percentage correct
    var ratio = (numCorrect / myQuestions.length);
    const percentage = Math.round(((numCorrect / myQuestions.length)*100)) + '%';
    var resultsMessage = "Not bad.";

    if (ratio <= .5){
      resultsMessage = "It's a tough quiz!"
      // play audio
      $('#not-correct')[0].play();
    } else if (ratio >.5 && ratio <.8){
      resultsMessage = "Not bad."
      $('#number-one')[0].play();
    } else{
      resultsMessage = "That was amazing!"
      $('#number-one')[0].play();
    }

    //add message to top of results page
    output.unshift(
    `<div id="score">
      You got ${percentage} correct. ${resultsMessage} Let's review the answers.
    </div>`
    );

    //display output to html
    resultsContainer.html(output.join(''));
    $('#results-parent').removeClass('hide');

    //add links, if present
    // for each question
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      if (typeof currentQuestion.link !== 'undefined'){
        // if there is a link
        $("#question-"+questionNumber+" .answer-business").append(
         `
         <div class="link">
          <a href="${currentQuestion.link}">
            ${currentQuestion.linkText}
          </a>
         </div>
         ` 
        );
      } else if (typeof currentQuestion.linkText !== 'undefined'){
        // if there is text but no link
        $("#question-"+questionNumber+" .answer-business").append(
         `
         <div class="link">
            ${currentQuestion.linkText}
         </div>
         ` 
        );
      }
    }); // end of for each


    //scroll to top
    window.scrollTo(0, 0);
  } // end of function

  // first run on page load
  buildQuiz();

  // pagination
  const slides = $('.slide');
  let currentSlide = 0;

  function showSlide(n) {
    //reset classes
    $(slides[currentSlide]).removeClass('active-slide');
    $(slides[n]).addClass('active-slide');

    //remove old buttons, add new buttons
    $('#buttons').remove();
    $('.active-slide .question-business').append(buttonContainerHTML);

    //reset button classes
    $('button').removeClass('hide');

    //show/hide buttons
    currentSlide = n;
    if(currentSlide === 0){
      $('#previous').addClass('hide');
    }
    if(currentSlide === slides.length-1) {
      $('#next').addClass('hide');
    } else {
      $('#submit').addClass('hide');
    }

    // for subsequent slides, run immediately
    setQuizHeight();

    // for first slide, wait until image loaded and run again
    $('.active-slide img').on('load', setQuizHeight);

    // enable fields on active slide
    $('.active-slide input').prop('disabled', false);

    //set focus
    $('.active-slide input').first().focus();

  }

  function validation(){
    if( $('.active-slide input:radio').is(':checked') == false ){
      $('.active-slide .form-error').addClass('is-visible');
      validationPassed = false;
    } else{
      $('.is-visible').removeClass('is-visible');
      validationPassed = true;
    }
    setQuizHeight();
  }

  function showNextSlide(){
    //go no further if we haven't passed validation
    validation();
    if(validationPassed == false){
      return false;
    }

    showSlide(currentSlide + 1);
    $('#intro').addClass('fadeout');
  }

  function showPreviousSlide(){
    showSlide(currentSlide - 1);
  }

  // show first slide
  showSlide(currentSlide);

  // event listeners
  $('.active-slide input:radio').change(validation);
  $('#quiz').on('click', '#previous', showPreviousSlide);
  $('#quiz').on('click', '#next', showNextSlide);
  $('#quiz').on('click', '#submit', showResults);
  $(window).resize(setQuizHeight);
});
