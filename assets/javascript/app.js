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
	      	console.log(questionCount);
	      	console.log(incorrectCount);
	      	number = 18;
	      	$('.questionBox').hide(100)
	      	stop();
	      	setTimeout(triviaGame.threeSeconds, 1000 * 3);
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
	threeSeconds: function(){
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
				number = 18;
      			$('.questionBox').hide(100)
      			$('.correctText').slideDown(1500);
				$('.correctText').slideUp(1500);
      			setTimeout(triviaGame.threeSeconds, 1000 * 3);
      			$("#timer").html(number);
      			score ++;
      			$('.scoreBoard').html('<center>' + '<h1>' + score + '</h1>' + '</center>');
      			triviaGame.gameResult();
        	}

			else{
				questionCount ++;
				incorrectCount ++;
				console.log(incorrectCount);
      			console.log(questionCount);
				number = 18;
				$('.questionBox').hide(100);
				$('.incorrectText').slideDown(1500);
				$('.incorrectText').slideUp(1500);
				setTimeout(triviaGame.threeSeconds, 1000 * 3);
				$("#timer").html(number);
				triviaGame.gameResult();
			}
		})
	},

	gameResult: function(){
		if(questionCount === 7){
			$('#results').text('Correct: ' + correctCount + '<br>');
			$('#results').text('Incorrect: ' + incorrectCount);
		}
	},
};
triviaGame.selectAnswer();	
triviaGame.gameStart();

//console.log(triviaGame);
