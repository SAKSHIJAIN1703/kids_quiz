import styled from "styled-components";


export const StLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:#d9d9ea;
;

  form {
    
    border-radius: 20px;
    margin-top: 200px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: pink;
    box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);

    h2 {
      text-align: center;
      margin-bottom: 1rem;
      font-weight: 300;
    }

    input {
      height: 30px;
      width: 90%;
      padding-left: 10px;
      border-radius: 5px;
      border: 0;
      color: grey;
    }

    input:focus {
      outline: black;
    }

    button {
     
      margin-top: 1.5rem;
      cursor: pointer;
      height: 2rem;
      width: 40%;
      background: rgb(2, 224, 249);
      border: 0;
      border-radius: 10px;
      font-weight: 300;
      font-weight: 400;
      color: white;
      transition: all 0.3s ease;
    }

    button:hover {
      background: #45b6b6;
    }
  }`
;
