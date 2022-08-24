import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="main">
        <h1>404</h1>
        <p>Sorry,the page you tried can not be found</p>
        <button type="button" className="btn">
          <Link to="/">Back Home</Link>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: hsl(22, 31%, 88%);
  min-height: calc(100vh - 10.8rem);
  text-align: center;

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 10rem;
      color: hsl(209, 61%, 16%);
      margin-bottom: 0;
    }

    p {
      margin-top: -1rem;
      font-size: 2rem;
      color: hsl(209, 61%, 16%);
      font-weight: 600;
      letter-spacing: 0.1rem;
    }

    .btn {
      width: 130px;
      height: 32px;
      background-color: hsl(22, 31%, 52%);
      border-radius: 5px;
      border: none;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      cursor: pointer;

      a {
        color: white;
      }

      &:hover {
        background-color: hsl(22, 31%, 67%);

        a {
          color: black;
        }
      }
    }
  }
`;
export default ErrorPage;
