import styled from "styled-components";


export const StQuizGeneral = styled.div`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  font-family: "Verdana", cursive, sans-serif;
  color: #ffffff;

}

body {
  background-color: #7cc6fe;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.app {
  background-color: #b7b9be;
  width: 500px;
  min-height: 260px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  margin-top:150px;
}

.score-section {
  display: flex;
  font-size: 24px;
  align-items: center;
}

/* QUESTION/TIMER/LEFT SECTION */
.question-section {
  width: 100%;
  position: relative;
}

.question-count {
  margin-bottom: 20px;
}

.question-count span {
  font-size: 28px;
}

.question-text {
  margin-bottom: 12px;
}

.timer-text {
  background: rgb(230, 153, 12);
  padding: 15px;
  margin-top: 20px;
  margin-right: 20px;
  border: 5px solid rgb(255, 189, 67);
  border-radius: 15px;
  text-align: center;
}

/* ANSWERS/RIGHT SECTION */
.answer-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button {
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: #a4a7b2;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid #60676e;
  cursor: pointer;
  margin-top: 8px;
}
.btn{
  color:#faf3f3;
    align-items: center;
    text-align:center;
    padding: 15px;
    font-size: 20px;
}
.correct {
  background-color: #2f922f;
}
h2{
  color:#faf3f3;
  background: transparent;
  text-shadow: 0 2px 2px black;
  font-size:35px

}
.incorrect {
  background-color: #ff3333;
}

button:hover {
  background-color: #666b7c;
}

button:focus {
  outline: none;
}

button svg {
  margin-right: 5px;
}
img{
  height: 200px;
  width: 300px;
  border-radius: 15px;
}

`;
