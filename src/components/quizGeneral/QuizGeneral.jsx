


import React, { useState, useEffect } from 'react';
import { StQuizGeneral } from './QuizGeneralStyle';

// import popup  from 'react-popup';
// import ReactDom from 'react-dom';
const QuizGeneral = ({ playerName }) => {
	// const randomQuestions=questions[Math.floor(Math.random()*questions.length)]

	const [questions, setQuestions] = useState([
		{
			questionText: "https://d.newsweek.com/en/full/1529160/elephant-appreciation-day-2019.jpg",
			answerOptions: [
				{ id: 1, answerText: 'cat', isCorrect: false },
				{ id: 1, answerText: 'dog', isCorrect: false },
				{ id: 1, answerText: 'elephant', isCorrect: true },
				{ id: 1, answerText: 'lion', isCorrect: false },
			],
		},
		{
			questionText: "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/cat-eyes-cute.jpg",
			answerOptions: [
				{ id: 2, answerText: 'lion', isCorrect: false },
				{ id: 2, answerText: 'cat', isCorrect: true },
				{ id: 2, answerText: 'horse', isCorrect: false },
				{ id: 2, answerText: 'dog', isCorrect: false },
			],
		},
		{
			questionText: "https://castlehorsefeeds.com/wp-content/uploads/2019/03/spring-horses.jpg",
			answerOptions: [
				{ id: 3, answerText: 'horse', isCorrect: true },
				{ id: 3, answerText: 'dog', isCorrect: false },
				{ id: 3, answerText: 'cat', isCorrect: false },
				{ id: 3, answerText: 'lion', isCorrect: false },
			],
		},
		{
			questionText: "https://www.hdnicewallpapers.com/Walls/Big/Lion/Lion_in_Gir_Forest_National_Park_India.jpg",
			answerOptions: [
				{ id: 4, answerText: 'cat', isCorrect: false },
				{ id: 4, answerText: 'horse', isCorrect: false },
				{ id: 4, answerText: 'dog', isCorrect: false },
				{ id: 4, answerText: 'lion', isCorrect: true },
			],
		},
		{
			questionText: "https://www.cottonmesawhitetail.com/wp-content/uploads/2020/03/6E98A30A-138A-441F-86CB-674BF74C667A-2048x1365.jpeg",
			answerOptions: [
				{ id: 5, answerText: 'cat', isCorrect: false },
				{ id: 5, answerText: 'horse', isCorrect: false },
				{ id: 5, answerText: 'dog', isCorrect: false },
				{ id: 5, answerText: 'buffalo', isCorrect: true },
			],
		},
		{
			questionText: "https://www.hdnicewallpapers.com/Walls/Big/Lion/Lion_in_Gir_Forest_National_Park_India.jpg",
			answerOptions: [
				{ id: 6, answerText: 'cat', isCorrect: false },
				{ id: 6, answerText: 'horse', isCorrect: false },
				{ id: 6, answerText: 'dog', isCorrect: false },
				{ answerText: 'lion', isCorrect: true },
			],
		},
		{
			questionText: "https://www.hdnicewallpapers.com/Walls/Big/Lion/Lion_in_Gir_Forest_National_Park_India.jpg",
			answerOptions: [
				{ id: 7, answerText: 'cat', isCorrect: false },
				{ id: 7, answerText: 'horse', isCorrect: false },
				{ id: 7, answerText: 'dog', isCorrect: false },
				{ id: 7, answerText: 'lion', isCorrect: true },
			],
		},
		{
			questionText: "https://i1.wp.com/clunyexports.com/wp-content/uploads/2014/01/P1000186-small.jpg",
			answerOptions: [
				{ id: 8, answerText: 'goat', isCorrect: true },
				{ id: 8, answerText: 'horse', isCorrect: false },
				{ id: 8, answerText: 'dog', isCorrect: false },
				{ id: 8, answerText: 'lion', isCorrect: false },
			],
		},
		{
			questionText: "https://s3.amazonaws.com/images.ecwid.com/images/12968799/1680828042.jpg",
			answerOptions: [
				{ id: 9, answerText: 'cat', isCorrect: false },
				{ id: 9, answerText: 'horse', isCorrect: false },
				{ id: 9, answerText: 'dog', isCorrect: false },
				{ id: 9, answerText: 'Hen', isCorrect: true },
			],
		},
		{
			questionText: "https://th.bing.com/th/id/OIP.2Keg3A8VEthVoLTx8h_ukwHaFl?pid=ImgDet&rs=1",
			answerOptions: [
				{ id: 10, answerText: 'cat', isCorrect: false },
				{ id: 10, answerText: 'horse', isCorrect: false },
				{ id: 10, answerText: 'peacock', isCorrect: true },
				{ id: 10, answerText: 'lion', isCorrect: false },
			],
		},

		// loadQuiz=()=>{
		// 	const{currentQuest}=this.state;
		// 	this.setState(()=>{
		// 		return{
		// 			questions:questions[currentQuest].question,
		// 			questions:questions[currentQuest].options,
		// 		};
		// 	});
		// 	console.log(this.state.answer);
		// }
	])
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [isWrongAns, setWrongAns] = useState(0)
	const [questionCount, setQuestionCount] = useState(0)
	const [questionsAsked, setQuestionsAsked] = useState([])
	const [incorrectAttempts, setIncorrectAttempts] = useState([])
	const MAX_QUESTIONS = 5

	console.log(currentQuestion, questions[currentQuestion], questionsAsked)


	useEffect(() => {
		let question = null;
		do {
			question = Math.floor(Math.random() * 10) + 1;
		} while (question >= 10 || questionsAsked.includes(question))
		setCurrentQuestion(question)
		setQuestionsAsked([...questionsAsked, currentQuestion])
	}, [])


	//     const radiosWrapper=useRef();
	// 	useEffect(()=>{
	// 	const findCheckedInput= radiosWrapper.current.querySelector('input:checked');
	// if (findCheckedInput){
	// 	findCheckedInput.checked=false;
	// }}
	// 	)



	const handleAnswerOptionClick = (isCorrect) => {
		// e.target.classList.add(isCorrect ? "correct" : "incorrect");
		if (isCorrect) {
			setWrongAns(0);
			setScore(score + 1);
			setQuestionCount(questionCount + 1)
			// <h2> Welcome, {playerName}</h2>

			let nextQuestion;

			do {
				nextQuestion = Math.floor(Math.random() * 10) + 1;
			} while (nextQuestion == currentQuestion && !questionsAsked.includes(nextQuestion))

			setQuestionsAsked([...questionsAsked, nextQuestion])

			console.log(incorrectAttempts.length, questionCount)
			if (incorrectAttempts.length <= questionCount)
				setIncorrectAttempts([...incorrectAttempts, 0])

			if (questionCount < MAX_QUESTIONS - 1) {
				setCurrentQuestion(nextQuestion);
			} else {
				setShowScore(true);
			}

		}
		else {
			// alert("Choose Correct Answer");
			setWrongAns(1);

			
			// if(incorrectAttempts)
			const temp = incorrectAttempts
			if (incorrectAttempts.length > 0 && incorrectAttempts.length == questionCount + 1)
				temp[questionCount] = incorrectAttempts[questionCount] + 1
			else
				temp.push(1)
			console.log(temp, incorrectAttempts.length, questionCount)
			setIncorrectAttempts(temp)

			// questions[currentQuestion].answerOptions.map((fst, poo) => {

			// 	// console.log(pune.answerText);

			// 	if (fst.id === 1) {

			// 		setFirst(first + 1)

			// 	}


			// })
			// // ====
			// questions[currentQuestion].answerOptions.map((sco, oo) => {

			// 	if (sco.id === 2) {
			// 		setSecond(second + 1)
			// 	}

			// })
			// // ====
			// questions[currentQuestion].answerOptions.map((fif, op) => {

			// 	if (fif.id === 2) {
			// 		setfifth(fifth + 1)
			// 	}

			// })
			// // ====
			// questions[currentQuestion].answerOptions.map((six, oa) => {

			// 	if (six.id === 2) {
			// 		setsixth(sixth + 1)
			// 	}

			// })
			// // ====
			// questions[currentQuestion].answerOptions.map((sev, oa) => {

			// 	if (sev.id === 2) {
			// 		setseventh(seventh + 1)
			// 	}

			// })
			// // ====
			// questions[currentQuestion].answerOptions.map((eig, os) => {

			// 	if (eig.id === 2) {
			// 		seteighth(eight + 1)
			// 	}

			// })
			// // ====
			// questions[currentQuestion].answerOptions.map((nin, od) => {

			// 	if (nin.id === 2) {
			// 		setninth(ninth + 1)
			// 	}

			// })
			// // ====
			// questions[currentQuestion].answerOptions.map((ten, of) => {

			// 	if (ten.id === 2) {
			// 		settenth(tenth + 1)
			// 	}

			// })
			// // ====
			// questions[currentQuestion].answerOptions.map((thi, oi) => {
			// 	if (thi.id === 3) {
			// 		setThrird(third + 1)
			// 	}

			// })
			// // ===
			// questions[currentQuestion].answerOptions.map((rth, pooii) => {
			// 	if (rth.id === 4) {
			// 		setForth(forth + 1)


			// 	}

			// })
		}


	};



	// }
	const resetQuiz = () => {
		setCurrentQuestion(Math.floor(Math.random() * 10) + 1);
		setScore(0);
		setShowScore(false);
		setQuestionCount(0)
		setQuestionCount(0)
		setQuestionsAsked([])
		setIncorrectAttempts([])
	}

	return (

		<StQuizGeneral>

			{/*  */}



			<div className='app'>

				{/* <div className='control' ref={radiosWrapper}/> */}
				{showScore ? (
					<div className='score-section'>
						<div>
							<h2> congratulation {playerName}</h2><br /><br />
							<div>
								You scored {score} out of {MAX_QUESTIONS}
								<br /><br />

								{
									incorrectAttempts.map((attempt, key) => <p key={key}>Question {key + 1}: {attempt}</p>)
								}

								{/* Question 1:{first}
								<br></br>
								Question 2:{second}
								<br></br>
								Question 3:{third}
								<br></br>
								Question 4:{forth}
								<br></br>
								Question 5:{fifth}
								<br></br>
								
								Question 6:{sixth}
								<br></br>
								Question 7:{seventh}
								<br></br>
								Question 8:{eight}
								<br></br>
								Question 9:{ninth}
								<br></br>
								
								Question 10:{tenth}  */}


							</div>
							<br />




							{/* 78 */}
							<div>
								<button className='btn' type="submit" onClick={resetQuiz}> restart</button>
							</div>
						</div>
					</div>





				) : (
					<>
						<div>
							<h2> Welcome, {playerName}</h2><br />
							<div className='question-section'>
								<div className='question-count'>
									<span>Question {questionCount + 1}</span>/{MAX_QUESTIONS}
								</div>
								{/* <button onClick={()=>(window.location.href="/")}></button> */}
								<div className='question-text'>
									<img src={questions[currentQuestion].questionText} alt="Animal's image" />
								</div>
							</div>
							<div className='answer-section'>
								{questions[currentQuestion].answerOptions.map((answerOption, key) => (
									<button key={key} onClick={(e) => handleAnswerOptionClick(answerOption.isCorrect, e)}>{answerOption.answerText}</button>
								))}
							</div>
							<div>
								{
									isWrongAns ? <p>Please choose a correct ans</p> : null
								}
							</div>
						</div>
					</>
				)}




			</div>
		</StQuizGeneral>
	);
}
export default QuizGeneral
