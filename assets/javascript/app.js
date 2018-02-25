$('.jumbotron').slideDown(1800);
var number = 15;
var score = 0;
var audio1 = document.getElementById('nflSound');
var correctCount = 0;
var incorrectCount = 0;
var questionCount = 0;

//Object for game
var triviaGame = {
	questions: [
		{
				question: 'Who holds the record for most touchdown passes?',
				correctChoice: 'Peyton Manning',
				answers: [
				{
					text: 'A: Tom Brady',
					correct: false
				},
				{
					text: 'B: Joe Montana',
					correct: false
				},
				{
					text: 'C: Peyton Manning',
					correct: true
				},
				{
					text: 'D: Dan Marino',
					correct: false
				}
			]
		},
		{		
				question: 'Which team has appeared in the most Superbowls?',
				correctChoice: 'The New England Patriots',
				answers: [
				{
					text: 'A: The New England Patriots',
					correct: true
				},
				{
					text: 'B: The Sanfransisco 49ers',
					correct: false
				},
				{
					text: 'C: The Dallas Cowboys',
					correct: false
				},
				{
					text: 'D: The Pittsburgh Steelers',
					correct: false
				}
			]
		},
		{		
				question: 'Who holds the record for most rushing yards in a season?',
				correctChoice: 'Eric Dickerson',
				answers: [
				{
					text: 'A: Adrian Peterson',
					correct: false
				},
				{
					text: 'B: Barry Sanders',
					correct: false
				},
				{
					text: 'C: Eric Dickerson',
					correct: true
				},
				{
					text: 'D: Chris Johnson',
					correct: false
				}
			]
		},
		{		
				question: 'Which team has never been to the Superbowl?',
				correctChoice: 'Clevland Browns',
				answers: [
				{
					text: 'A: Tampabay Buccaneers',
					correct: false
				},
				{
					text: 'B: Clevland Browns',
					correct: true
				},
				{
					text: 'C: Tennessee Titans',
					correct: false
				},
				{
					text: 'D: Arizona Cardinals',
					correct: false
				}
			]
		},
		{		
				question: 'Who played in the first Superbowl?',
				correctChoice: 'Green Bay Packers vs Kansas City Chiefs',
				answers: [
				{
					text: 'A: Green Bay Packers vs Oakland Raiders',
					correct: false
				},
				{
					text: 'B: Dallas Cowboys vs Miami Dolphins',
					correct: false
				},
				{
					text: 'C: New York Jets vs Baltimore Colts',
					correct: false
				},
				{
					text: 'D: Green Bay Packers vs Kansas City Chiefs',
					correct: true
				}
			]
		},
		{		
				question: 'Who holds the record for most receiving yards',
				correctChoice: 'Jerry Rice',
				answers: [
				{
					text: 'A: Jerry Rice',
					correct: true
				},
				{
					text: 'B: Larry Fitzgerald',
					correct: false
				},
				{
					text: 'C: Tony Gonzalez',
					correct: false
				},
				{
					text: 'D: Randy Moss',
					correct: false
				}
			]
		},
		{		
				question: 'How many NFL teams are there?',
				correctChoice: '32',
				answers: [
				{
					text: 'A: 30',
					correct: false
				},
				{
					text: 'B: 32',
					correct: true
				},
				{
					text: 'C: 28',
					correct: false
				},
				{
					text: 'D: 36',
					correct: false
				}
			]
		},
		{		
				question: 'Which team was the only team to go undefeated?',
				correctChoice: 'The Miami Dolphins',
				answers: [
				{
					text: 'A: The Chicago Bears',
					correct: false
				},
				{
					text: 'B: The New England Patriots',
					correct: false
				},
				{
					text: 'C: The Denver Broncos',
					correct: false
				},
				{
					text: 'D: The Miami Dolphins',
					correct: true
				}
			]
		},
		{		
				question: 'What is the mascot for Detroit?',
				correctChoice: 'Lion',
				answers: [
				{
					text: 'A: Tiger',
					correct: false
				},
				{
					text: 'B: Lion',
					correct: true
				},
				{
					text: 'C: Panther',
					correct: false
				},
				{
					text: 'D: Warrior',
					correct: false
				}
			]
		},
		{		
				question: 'Which team does Russel Wilson play for?',
				correctChoice: 'Seattle Seahawks',
				answers: [
				{
					text: 'A: LA Chargers',
					correct: false
				},
				{
					text: 'B: Houston Texans',
					correct: false
				},
				{
					text: 'C: Seattle Seahawks',
					correct: true
				},
				{
					text: 'D: New Orleans Saints',
					correct: false
				}
			]
		},
	],
//Game starts with this function. Displayes question, timer and answers	
	gameStart: function(){
		$('.btn-info').on('click', function(){
			audio1.play();
			$('.questionBox').slideDown('slow');
			$('.scoreWord').slideDown('slow');
			$('.scoreBoard').slideDown('slow');
			$('.btn-info').slideUp('slow');
			questionCount ++;
			console.log(questionCount);
			//Timer function			
			var intervalId;
			function run() {
	      clearInterval(intervalId);
	      intervalId = setInterval(decrement, 1000);
    	}
    	function decrement() {

	      number--;

	      $("#timer").html(number);

	      if (number === 0) {
	      	questionCount ++;
	      	incorrectCount ++;
	      	number = 20;
	      	console.log(questionCount);
	      	$('.questionBox').hide(100)
	      	$('.resultText').html('Times Up!' + '<br>' + triviaGame.randQuestion.correctChoice);
			$('.resultText').slideDown(1500);
			$('.resultText').slideUp(3500);
	      	stop();
	      	setTimeout(triviaGame.fiveSeconds, 1000 * 5);
	      	$("#timer").html(number);
	      	run();
	      	triviaGame.gameResult();
	   		}
    	}

    	function stop() {

      		clearInterval(intervalId);
    	}
    	
    	triviaGame.questionSelect();
    	run();
    	});
	},
		//Random question select and display to html
	questionSelect: function(){
		var that = this;
		that.randIndex = Math.floor(Math.random() * that.questions.length);
		that.randQuestion = that.questions[that.randIndex];
		$('#questionTitle').html(that.randQuestion.question + '<br>' + '<br>');
		$('#answerSpotA').html(that.randQuestion.answers[0].text);
		$('#answerSpotA').attr("correct", that.randQuestion.answers[0].correct);
		$('#answerSpotB').html(that.randQuestion.answers[1].text);
		$('#answerSpotB').attr("correct", that.randQuestion.answers[1].correct);
		$('#answerSpotC').html(that.randQuestion.answers[2].text);
		$('#answerSpotC').attr("correct", that.randQuestion.answers[2].correct);
		$('#answerSpotD').html(that.randQuestion.answers[3].text);
		$('#answerSpotD').attr("correct", that.randQuestion.answers[3].correct);
		console.log(triviaGame.randQuestion);
	},

		
	//Time out function between questions
	fiveSeconds: function(){
		triviaGame.questions.splice(triviaGame.randIndex,1);
		triviaGame.questionSelect();
		$('.questionBox').slideDown(100);
	},
	//Selecting answer function
	selectAnswer: function(){
		$('.answers').on('click', function(){
			var val = $(this).attr('correct')
			if ( val == 'true'){
				questionCount ++;
				correctCount ++;
				number = 20;
				console.log(questionCount);
      			$('.questionBox').hide(100);
      			$('.resultText').html('Correct!');
      			$('.resultText').slideDown(1500);
				$('.resultText').slideUp(3500);
      			setTimeout(triviaGame.fiveSeconds, 1000 * 5);
      			$("#timer").html(number);
      			score ++;
      			$('.scoreBoard').html('<center>' + '<h1>' + score + '</h1>' + '</center>');
      			triviaGame.gameResult();
        	}

			else{
				questionCount ++;
				incorrectCount ++;
				number = 20;
				console.log(questionCount);
				$('.questionBox').hide(100);
				$('.resultText').html('Incorrect!' + '<br>' + triviaGame.randQuestion.correctChoice);
				$('.resultText').slideDown(1500);
				$('.resultText').slideUp(3500);
				setTimeout(triviaGame.fiveSeconds, 1000 * 5);
				$("#timer").html(number);
				triviaGame.gameResult();
			}
		})
	},

	gameResult: function(){
		if(questionCount === 11){
			$('#gameResults').html('Correct: ' + correctCount + '<br>' + '<br>' + 'Incorrect: ' + incorrectCount );
			$('#gameResults').slideDown(5000);
			$('.btn-reset').slideDown(5000);


			
		}
	},
};
triviaGame.selectAnswer();	
triviaGame.gameStart();

