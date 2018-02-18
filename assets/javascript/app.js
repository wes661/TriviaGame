var triviaGame = {
	questions: [
		{
				question: 'Who holds the record for most touchdown passes?',
				answers: [
				{
					a: 'Tom Brady',
					correct: false
				},
				{
					b: 'Joe Montana',
					correct: false
				},
				{
					c: 'Peyton Manning',
					correct: true
				},
				{
					d: 'Dan Marino',
					correct: false
				}
			]
		},
		{		
				question: 'Which team has appeared in the most Superbowls?',
				answers: [
				{
					a: 'The New England Patriots',
					correct: true
				},
				{
					b: 'The Sanfransisco 49ers',
					correct: false
				},
				{
					c: 'The Dallas Cowboys',
					correct: false
				},
				{
					d: 'The Pittsburgh Steelers',
					correct: false
				}
			]
		},
		{		
				question: 'Who holds the record for most rushing yards in a season?',
				answers: [
				{
					a: 'Adrian Peterson',
					correct: false
				},
				{
					b: 'Barry Sanders',
					correct: false
				},
				{
					c: 'Eric Dickerson',
					correct: true
				},
				{
					d: 'Chris Johnson',
					correct: false
				}
			]
		},
		{		
				question: 'How many teams have never been to the Superbowl?',
				answers: [
				{
					a: '6',
					correct: false
				},
				{
					b: '4',
					correct: true
				},
				{
					c: '8',
					correct: false
				},
				{
					d: '3',
					correct: false
				}
			]
		},
		{		
				question: 'Who played in the first Superbowl?',
				answers: [
				{
					a: 'Green Bay Packers vs Oakland Raiders',
					correct: false
				},
				{
					b: 'Dallas Cowboys vs Miami Dolphins',
					correct: false
				},
				{
					c: 'New York Jets vs Baltimore Colts',
					correct: false
				},
				{
					d: 'Green Bay Packers vs Kansas City Chiefs',
					correct: true
				}
			]
		},
	],
	gameStart: function(){
		this.randQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
		$('.questionBox').text(this.randQuestion.question);
		$('.questionBox').text(this.randQuestion.question);
		
	}
};
triviaGame.gameStart();
console.log(triviaGame.randQuestion.question.answers);
//alert(triviaGame.randQuestion);