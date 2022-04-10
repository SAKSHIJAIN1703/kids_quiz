

import React, { useState } from 'react';
import { StQuizGeneral } from './QuizGeneralStyle';
export default function App() {
	const questions = [
		{
			questionText: <img src="https://d.newsweek.com/en/full/1529160/elephant-appreciation-day-2019.jpg" alt="error"></img>,
			answerOptions: [
				{ answerText: 'cat', isCorrect: false },
				{ answerText: 'dog', isCorrect: false },
				{ answerText: 'elephant', isCorrect: true },
				{ answerText: 'lion', isCorrect: false },
			],
		},
		{
			questionText: <img src="https://hddesktopwallpapers.in/wp-content/uploads/2015/09/cat-eyes-cute.jpg" alt="e"></img>,
			answerOptions: [
				{ answerText: 'lion', isCorrect: false },
				{ answerText: 'cat', isCorrect: true },
				{ answerText: 'horse', isCorrect: false },
				{ answerText: 'dog', isCorrect: false },
			],
		},
		{
			questionText: <img src="https://castlehorsefeeds.com/wp-content/uploads/2019/03/spring-horses.jpg" alt="r"></img>,
			answerOptions: [
				{ answerText: 'horse', isCorrect: true },
				{ answerText: 'dog', isCorrect: false },
				{ answerText: 'cat', isCorrect: false },
				{ answerText: 'lion', isCorrect: false },
			],
		},
		{
			questionText: <img src="https://www.hdnicewallpapers.com/Walls/Big/Lion/Lion_in_Gir_Forest_National_Park_India.jpg" alt="o"></img>,
			answerOptions: [
				{ answerText: 'cat', isCorrect: false },
				{ answerText: 'horse', isCorrect: false },
				{ answerText: 'dog', isCorrect: false },
				{ answerText: 'lion', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect,e) => {
	
		if (isCorrect) {
			setScore(score + 1);
			e.target.classList.add(isCorrect ? "correct" : "incorrect");
		}
		const nextQuestion = currentQuestion + 1;
		
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			
			setShowScore(true);
		}
		
	

		
	
	};
	return (
    <StQuizGeneral>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={(e) => handleAnswerOptionClick(answerOption.isCorrect,e)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    </StQuizGeneral>
	);
}