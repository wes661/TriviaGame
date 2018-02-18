var triviaGame = {
	questions: [
	{
				question1: 'Who holds the record for most touchdown passes?',
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
			],

				question2: 'Which team has appeared in the most superbowls?',
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
		}
	]
}
console.log(triviaGame.questions)