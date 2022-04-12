

import React, { useState } from 'react';
import { StQuizGeneral } from './QuizGeneralStyle';

// import popup  from 'react-popup';
// import ReactDom from 'react-dom';
 const QuizGeneral=({playerName}) =>


	{
	const questions = [
		{
			questionText: <img src="https://d.newsweek.com/en/full/1529160/elephant-appreciation-day-2019.jpg" alt="error"></img>,
			answerOptions: [
				{id:1, answerText: 'cat', isCorrect: false },
				{ id:1,answerText: 'dog', isCorrect: false },
				{ answerText: 'elephant', isCorrect: true },
				{id:1, answerText: 'lion', isCorrect: false },
			],
		},
		{
			questionText: <img src="https://hddesktopwallpapers.in/wp-content/uploads/2015/09/cat-eyes-cute.jpg" alt="e"></img>,
			answerOptions: [
				{id:2, answerText: 'lion', isCorrect: false },
				{ answerText: 'cat', isCorrect: true },
				{id:2, answerText: 'horse', isCorrect: false },
				{id:2, answerText: 'dog', isCorrect: false },
			],
		},
		{
			questionText: <img src="https://castlehorsefeeds.com/wp-content/uploads/2019/03/spring-horses.jpg" alt="r"></img>,
			answerOptions: [
				{ answerText: 'horse', isCorrect: true },
				{id:3, answerText: 'dog', isCorrect: false },
				{id:3, answerText: 'cat', isCorrect: false },
				{id:3, answerText: 'lion', isCorrect: false },
			],
		},
		{
			questionText: <img src="https://www.hdnicewallpapers.com/Walls/Big/Lion/Lion_in_Gir_Forest_National_Park_India.jpg" alt="o"></img>,
			answerOptions: [
				{id:4, answerText: 'cat', isCorrect: false },
				{id:4, answerText: 'horse', isCorrect: false },
				{id:4, answerText: 'dog', isCorrect: false },
				{ answerText: 'lion', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [first, setFirst] = useState(0);
	const [second, setSecond] = useState(0);
	const [third, setThrird] = useState(0);
	const [forth, setForth] = useState(0);
	
//     const radiosWrapper=useRef();
// 	useEffect(()=>{
// 	const findCheckedInput= radiosWrapper.current.querySelector('input:checked');
// if (findCheckedInput){
// 	findCheckedInput.checked=false;
// }}
// 	)

	const handleAnswerOptionClick = (isCorrect,e) => {
		// e.target.classList.add(isCorrect ? "correct" : "incorrect");
		if (isCorrect) {
			setScore(score+1);
			// <h2> Welcome, {playerName}</h2>

		const nextQuestion = currentQuestion + 1;
		
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			
			setShowScore(true);
		
		}
	
	}
	else{
		alert("Choose Correct Answer")
		questions[currentQuestion].answerOptions.map((fst,poo)=>{
			// console.log(pune.answerText);
			if(fst.id===1){
			
				setFirst(first+1)	
				
			}
			
			
		})
		// ====
		questions[currentQuestion].answerOptions.map((sco,oo)=>{
		
			if(sco.id===2){
				setSecond(second+1)	
			}
			
		})
		// ====
		questions[currentQuestion].answerOptions.map((thi,oi)=>{
			if(thi.id===3){
				setThrird(third+1)	
			}
			
		})
		// ===
		questions[currentQuestion].answerOptions.map((rth,pooii)=>{
			if(rth.id===4){
				setForth(forth+1)

				
			}
			
		})
	}
		

	};
	
	//isme do l{og ek sath kr skte na? hum kr to rhe h meri bhondu
	//acga hao rukja meri ma 1 min
	// if (showScore)
	// const Quiz=()=>{
	// 	codekhooooooooooooooooooooooooooooooooooooooooooooo
	// }
	const resetQuiz=()=>{
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
		
	}

	return (
		
    <StQuizGeneral>
		
	
			
		

		<div className='app'>
		
		{/* <div className='control' ref={radiosWrapper}/> */}
			{showScore ? (
				<div className='score-section'>
				<div>
				<h2> congratulation {playerName}</h2><br/><br/>
					<div>
					You scored {score} out of {questions.length}
				<br/><br/>
				
							Question 1:{first}
							<br></br>
							Question 2:{second}
							<br></br>
							Question 3:{third}
							<br></br>
							Question 4:{forth}
					</div>
					<br/>
					



					{/* 78 */}
					<div>
				<button className='btn' type="submit" onClick={resetQuiz}> restart</button>
				</div>
		</div>
			</div>
			
			
			
				
				
			) : (
				<>
				<div>
				<h2> Welcome, {playerName}</h2><br/>
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
					</div>
				</>
			)}



			
		</div>
    </StQuizGeneral>
	);
}
export default QuizGeneral