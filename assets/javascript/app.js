$('.jtron').slideDown(1800);

//Object for game
var triviaGame = {
	questions: [
		{
				question: 'Who holds the record for most touchdown passes?',
				answers: [
				{
					a: 'A: Tom Brady',
					correct: false
				},
				{
					b: 'B: Joe Montana',
					correct: false
				},
				{
					c: 'C: Peyton Manning',
					correct: true
				},
				{
					d: 'D: Dan Marino',
					correct: false
				}
			]
		},
		{		
				question: 'Which team has appeared in the most Superbowls?',
				answers: [
				{
					a: 'A: The New England Patriots',
					correct: true
				},
				{
					b: 'B: The Sanfransisco 49ers',
					correct: false
				},
				{
					c: 'C: The Dallas Cowboys',
					correct: false
				},
				{
					d: 'D: The Pittsburgh Steelers',
					correct: false
				}
			]
		},
		{		
				question: 'Who holds the record for most rushing yards in a season?',
				answers: [
				{
					a: 'A: Adrian Peterson',
					correct: false
				},
				{
					b: 'B: Barry Sanders',
					correct: false
				},
				{
					c: 'C: Eric Dickerson',
					correct: true
				},
				{
					d: 'D: Chris Johnson',
					correct: false
				}
			]
		},
		{		
				question: 'Which team has never been to the Superbowl?',
				answers: [
				{
					a: 'A: Tampabay Buccaneers',
					correct: false
				},
				{
					b: 'B: Clevland Browns',
					correct: true
				},
				{
					c: 'C: Tennessee Titans',
					correct: false
				},
				{
					d: 'D: Arizona Cardinals',
					correct: false
				}
			]
		},
		{		
				question: 'Who played in the first Superbowl?',
				answers: [
				{
					a: 'A: Green Bay Packers vs Oakland Raiders',
					correct: false
				},
				{
					b: 'B: Dallas Cowboys vs Miami Dolphins',
					correct: false
				},
				{
					c: 'C: New York Jets vs Baltimore Colts',
					correct: false
				},
				{
					d: 'D: Green Bay Packers vs Kansas City Chiefs',
					correct: true
				}
			]
		},
		{		
				question: 'Who holds the record for most receiving yards',
				answers: [
				{
					a: 'A: Jerry Rice',
					correct: true
				},
				{
					b: 'B: Larry Fitzgerald',
					correct: false
				},
				{
					c: 'C: Tony Gonzalez',
					correct: false
				},
				{
					d: 'D: Randy Moss',
					correct: false
				}
			]
		},
		{		
				question: 'How many NFL teams are there?',
				answers: [
				{
					a: 'A: 30',
					correct: false
				},
				{
					b: 'B: 32',
					correct: true
				},
				{
					c: 'C: 28',
					correct: false
				},
				{
					d: 'D: 36',
					correct: false
				}
			]
		},
	],
//Game starts with this function. Displayes question, timer and answers	
	gameStart: function(){
		$('.btn-info').on('click', function(){
			$('.questionBox').slideDown('slow');
			$('.btn-info').slideUp('slow');
			//Timer function			
			var intervalId;
			var number = 15;
			function run() {
	      clearInterval(intervalId);
	      intervalId = setInterval(decrement, 1000);
    	}
    	function decrement() {

	      number--;

	      $("#timer").html(number);

	      if (number === 0) {

	        stop();
      }
    }

    	function stop() {

      clearInterval(intervalId);
    }
    	run();


		//Random question select and display to html
		});
		this.randQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
		$('#questionTitle').append(this.randQuestion.question + '<br>' + '<br>');
		$('#answerSpotA').append(this.randQuestion.answers[0].a + '<br>' + '<br>');
		$('#answerSpotB').append(this.randQuestion.answers[1].b + '<br>' + '<br>');
		$('#answerSpotC').append(this.randQuestion.answers[2].c + '<br>' + '<br>');
		$('#answerSpotD').append(this.randQuestion.answers[3].d);

		function selectAnswer(){
			for(var i = 0; i < questions.length; i++ ){
				answers[i].click(function(){
					alert('selected');
					console.log(answers);
				})
			}
		}
		selectAnswer();
	},
};
triviaGame.gameStart();

console.log(triviaGame);
