import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image1 from "../assets/hero-bcg.jpeg";
import image2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <article className="part1">
          <h1>
            Design your <br /> comfort zone
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            quos ex fuga molestias quam rerum alias officiis animi, ut
            consequatur ?
          </p>
          <button type="button" className="btn">
            <Link to="/products">Shop Now</Link>
          </button>
        </article>
        <article className="part2">
          <div className="back-color"></div>
          <img src={image1} alt="bcg 1" className="image1" />
          <img src={image2} alt="bcg 2" className="image2" />
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
  /* width: 1170px; */

  .container {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
  }

  .part1 {
    padding-left: 4.8rem;
    padding-right: 9rem;

    h1 {
      font-size: 2.8rem;
      letter-spacing: 0.1rem;
    }

    p {
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      line-height: 1.9;
      color: hsl(210, 22%, 49%);
    }

    .btn {
      background: hsl(22, 31%, 52%);
      border: none;
      border-radius: 3px;
      width: 150px;
      height: 45px;
      text-transform: capitalize;

      &:hover {
        background: hsl(22, 31%, 67%);
      }
    }

    a {
      font-size: 1.1rem;
      color: white;
      letter-spacing: 0.1rem;
      &:hover {
        color: hsl(22, 28%, 21%);
      }
    }
  }

  .part2 {
    padding-right: 4rem;
    position: relative;

    div {
      position: absolute;
      width: 50px;
      height: 270px;
      background-color: hsl(22, 31%, 81%);
      bottom: 168px;
      left: -41px;
      z-index: -1;
    }

    .image1 {
      width: 450px;
      height: 550px;
    }

    .image2 {
      width: 250px;
      position: absolute;
      bottom: 3px;
      left: -120px;
    }
  }

  @media (max-width: 892px) {
    .container {
      display: grid;
      grid-template-columns: auto;
      align-items: center;
    }

    .part2 {
      display: none;
    }
  }
`;

export default Hero;
