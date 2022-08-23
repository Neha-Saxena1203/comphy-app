import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import bcgImage from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <Wrapper>
      <PageHero title="about" />
      <article className="abt-container">
        <img src={bcgImage} alt="about" />

        <div className="section2">
          <h2>Our Story</h2>
          <hr className="line" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            quibusdam velit alias neque fuga vitae. Sunt, harum quos temporibus
            nobis eum debitis dolore ipsa ex provident ullam. Cupiditate,
            reprehenderit tempore! harum quos temporibus nobis eum debitis
            dolore ipsa ex provident ullam. Cupiditate, reprehenderit tempore!
            harum quos temporibus nobis eum debitis dolore ipsa ex provident
            ullam. Cupiditate, reprehenderit tempore!
          </p>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .abt-container {
    display: grid;
    grid-template-columns: auto auto;
    padding: 6rem;
    img {
      width: 600px;
      height: 500px;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .section2 {
    padding-left: 4rem;
    position: relative;
    margin-top: -2.4rem;

    h2 {
      font-size: 2.3rem;
      letter-spacing: 0.25rem;
      color: hsl(209, 61%, 16%);
    }

    .line {
      width: 85px;
      height: 4px;
      border: none;
      background-color: hsl(22, 31%, 52%);
      position: absolute;
      top: 4.8rem;
      left: 4rem;
    }

    p {
      margin-top: 3rem;
      line-height: 2rem;
      color: hsl(210, 22%, 49%);
    }
  }

  @media (max-width: 1055px) {
    .abt-container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      img {
        width: 800px;
        height: 500px;
        object-fit: cover;
        border-radius: 5px;
      }
    }

    .section2 {
      margin-top: 1rem;
    }
  }

  @media (max-width: 855px) {
    .abt-container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      img {
        width: 90%;
        height: 500px;
        object-fit: cover;
        border-radius: 5px;
      }
    }
  }

  @media (max-width: 650px) {
    .abt-container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      img {
        width: 90%;
        height: 500px;
        object-fit: cover;
        border-radius: 5px;
      }
    }
  }
`;
export default AboutPage;
