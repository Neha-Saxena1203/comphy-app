import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="main">
        <h2>Join our newsletter & 20% off</h2>
        <div className="part">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum vero
            dicta ipsam, explicabo omnis quis ratione ipsa saepe in possimus
            labore necessitatibus?
          </p>
          <form action="https://formspree.io/f/mrgdgqzv" method="POST">
            <input
              type="email"
              className="input-class"
              placeholder="Enter Email"
              name="_replyto"
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main {
    margin-top: 15rem;
    margin-left: 8rem;
    margin-bottom: 13rem;

    h2 {
      letter-spacing: 0.1rem;
      font-size: 2rem;
      color: hsl(22, 28%, 21%);
    }
  }

  .part {
    display: grid;
    grid-template-columns: 1fr 1fr;

    p {
      padding-right: 2rem;
      line-height: 1.7;
    }

    .input-class {
      width: 340px;
      height: 30px;
      border: 2px black solid;
      border-radius: 4px;
      padding-left: 0.8rem;
    }

    .input-class::placeholder {
      color: #222;
      font-size: 1rem;
    }

    .btn {
      width: 115px;
      height: 36px;
      border: 2px black solid;
      border-radius: 4px;
      margin-left: -2px;
      font-size: 1rem;
      letter-spacing: 0.1rem;
      background-color: hsl(22, 31%, 52%);

      &:hover {
        color: white;
      }
    }
  }

  @media (max-width: 1250px) {
    .main {
      margin-top: 30rem;
      margin-bottom: 5rem;
    }
  }

  @media (max-width: 1050px) {
    .main {
      margin-top: 45rem;
      margin-bottom: 5rem;
    }

    .part {
      display: flex;
      flex-direction: column;
    }
  }

  /* @media (max-width: 1020px) {
    .part {
      display: flex;
      flex-direction: column;
    }
  } */
`;
export default Contact;
