import styled from "styled-components";
import Fondo from "../../assets/images/fondo.jpeg";
import loginvid from "../../assets/images/loginvid.gif";

export const Login = styled.div`
  background-image: url(${loginvid});
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  .cover {
    background-color: #00000096;

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    position: relative;

    align-items: center;
  }
  .login {
    background-color: #ffffff2d;
    padding: 40px;
    padding-top: 20px;
    position: relative;
    top: 25%;
    min-width: 300px;

    // box-shadow: 0px 0px 13px 5px rgba(255, 255, 255, 0.295);
    .login__form-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: white;
      margin-bottom: 40px;

      filter: blur(0.6px);
      img {
        width: 80px;
        margin-top: 20px;
      }
      h2 {
        font-family: OCRS;
        font-size: calc(1.5em);
      }
    }

    .login__form-inputs {
      display: flex;
      flex-direction: column;
      gap: 10px;

      input {
        font-family: OCRS;
        color: white;
        font-weight: 600;
        letter-spacing: 1px;
        outline: none;
        padding: 7px;

        border: 0;
        background-color: #b8b8b828;
        ::placeholder {
          font-family: OCRS;
        }
      }

      button {
        padding: 7px;
        background-color: #b8b8b828;
        border: 0;
        border-radius: 3px;

        color: #d4d4d4;
        letter-spacing: 2px;
        font-weight: 600;
        margin-top: 20px;
        filter: blur(0.3px);
        :hover {
          color: #eeeded;
          cursor: pointer;
          background-color: #c9c9c928;
        }
        :active {
          background-color: #b8b8b857;
        }
      }
    }
  }

  @media (max-width: 742px) {
    .login {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
`;
