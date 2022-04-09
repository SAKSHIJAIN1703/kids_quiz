import styled from "styled-components";


export const StWelcome = styled.div`

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: #d2dbdd;
  font-family: sans-serif;
}

background-color:#e5f3f6;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .welcome__container {
    margin-top: 200px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);

    h2{
      color: red;
      background: transparent;
      text-shadow: 0 2px 2px black;
      font-size:40px

    }

    span {
     
      margin-top:15px;
      margin-bottom: 1rem;
    }

    button {
      cursor: pointer;
      height: 3rem;
      width: 200px;
      background: #5dd0ca;
      border: 0;
      border-radius: 10px;
      font-weight: 300;
      font-weight: 400;
      color: white;
      margin-bottom: 1rem;
      transition: all 0.3s ease;
      font-size:20px
    }

    button:hover {
      background: #45b6b6;
    }

    .logoutButton {
      background: grey;

      &:hover {
        background:#686666;
      }
    }
  }
`;
