import React from 'react';
import {useNavigate} from 'react-router-dom';
import { StWelcome } from './welcomeStyle';


const Welcome = ({playerName}) => {
    const navigate = useNavigate();

  return (
      <StWelcome>
          <div className='welcome__container'>
            <h2> Welcome, {playerName}</h2>
            <span></span>
            <button onClick={() => navigate('/general')}>start</button>
            
            <button className='logoutButton' onClick={() => navigate('/')}>Log Out</button>
         </div>
      </StWelcome>
  )};

  export default Welcome;
