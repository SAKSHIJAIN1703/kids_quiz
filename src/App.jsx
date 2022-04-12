import React, {useState} from 'react';

import {Route,Routes} from "react-router-dom";
import  Login  from './components/login/Login';
import  Welcome  from './components/welcome/Welcome';
import  QuizGeneral  from './components/quizGeneral/QuizGeneral';


const App = () => {
  const [playerName, setPlayerName] = useState('')

  const handlePlayerName = (newName) => {
    setPlayerName(newName);
  }

  return (
    <div className='app'>
  
      {/* <Welcome playerName={playerName}/>
       */}
       <Routes>
         
       <Route exact path="/" element={<Login onHandlePlayerName={handlePlayerName} />}/>
       <Route path="/welcome" element={<Welcome playerName={playerName}/>}/>
      <Route path="/general" element={<QuizGeneral playerName={playerName}/>}/>

       </Routes>


       
       
     
    </div>
  )
};

export default App;
