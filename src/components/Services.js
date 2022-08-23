import React from "react";
import styled from "styled-components";
// import { services } from "../utils/constants";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

const Services = () => {
  return (
    <Wrapper>
      <div className="center extra">
        <article className="header">
          <h1>
            Custom Furniture <br /> built only for you
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            adipisci dolorem pariatur ratione sapiente, consequuntur eveniet
            libero asperiores!
          </p>
        </article>
      </div>

      <div className="parent">
        <div className="child1">
          <div className="icon">
            <GiCompass />
          </div>
          <h3>Mission</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde velit autem unde
          </p>
        </div>
        <div className="child1">
          <div className="icon">
            <GiDiamondHard />
          </div>
          <h3>Vision</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde velit autem unde
          </p>
        </div>
        <div className="child1">
          <div className="icon">
            <GiStabbedNote />
          </div>
          <h3>History</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde velit autem unde
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0 19rem 0;
  background: hsl(22, 31%, 88%);
  position: relative;
  display: flex;
  justify-content: center;

  .center {
    margin-left: auto;
    margin-right: auto;

    /* background: hsl(22, 31%, 88%); */
  }

  /* .extra {
    padding: 5rem 0 15rem 0;
  } */
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  h1 {
    margin-left: 8rem;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    color: hsl(22, 28%, 21%);
  }
  p {
    margin-right: 8rem;
    margin-left: 0;
    margin-top: 2rem;
    color: hsl(22, 28%, 37%);
    line-height: 1.7;
  }

  .parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    position: absolute;
    top: 50%;
  }

  .child1 {
    width: 22rem;
    height: 17rem;
    background-color: hsl(22, 31%, 67%);
    margin-left: 2rem;
    border-radius: 5px;
    text-align: center;
    padding: 1rem;

    .icon {
      width: 4.2rem;
      height: 4.2rem;
      background-color: hsl(22, 31%, 88%);
      border-radius: 50%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 2.2rem;
        color: hsl(22, 28%, 21%);
      }
    }

    h3 {
      letter-spacing: 0.1rem;
      color: hsl(22, 28%, 21%);
      font-size: 1.5rem;
    }

    p {
      color: hsl(22, 28%, 29%);
      text-align: center;
      width: 100%;
      margin-top: 0;
    }
  }

  @media (max-width: 900px) {
    .header {
      display: grid;
      grid-template-columns: 1fr;

      h1 {
        margin-left: auto;
        margin-right: auto;
      }

      p {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
    }
  }
  @media (min-width: 792px) {
    .child1 {
      margin-top: 1.7rem;
    }

    /* .extra {
      padding: 5rem 0 25rem 0;
    } */
  }

  @media (min-width: 592px) {
    .child1 {
      margin-top: 1.7rem;
    }
    /* .extra {
      padding: 5rem 0 20rem 0;
    } */
  }

  @media (min-width: 392px) {
    .child1 {
      margin-top: 1.7rem;
    }
  }
`;
export default Services;
