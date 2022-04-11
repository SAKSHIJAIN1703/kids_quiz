

import React, { useState } from 'react';
import { StQuizGeneral } from './QuizGeneralStyle';
// import popup  from 'react-popup';
// import ReactDom from 'react-dom';
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
		// e.target.classList.add(isCorrect ? "correct" : "incorrect");
		if (isCorrect) {
			setScore(score);
		
	
		const nextQuestion = currentQuestion + 1;
		
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			
			setShowScore(true);
		
		}
	
	}
	else{
		alert("Choose Correct Answer")
	}
		

	};
	//isme do l{og ek sath kr skte na? hum kr to rhe h meri bhondu
	//acga hao rukja meri ma 1 min
	// if (showScore)
	// const Quiz=()=>{
	// 	codekhooooooooooooooooooooooooooooooooooooooooooooo
	// }

	return (
    <StQuizGeneral>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}

					{/* 78 */}
				</div>
				
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						{/* <button onClick={()=>(window.location.href="/")}></button> */}
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