import React,{useState} from 'react';
import { StLogin } from './loginStyle';
import {useNavigate} from 'react-router-dom';

const Login = ({onHandlePlayerName}) => {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const newName = name;

    onHandlePlayerName(newName);
    
    navigate('/welcome')
   
    setName('')
  }

  return (
      <StLogin>
          <form  onSubmit={handleLogin}>
            <h2>Enter your name to start playing</h2>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Your Name...' />
            <button type='submit'>Let's Play</button>
          </form>
      </StLogin>
  )
};

export default Login;
