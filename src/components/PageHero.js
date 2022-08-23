import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="main-con">
        <Link to="/">Home /</Link>
        {product && <Link to="/products">Products /</Link>}
        {title}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-con {
    width: 100%;
    height: 9rem;
    background-color: hsl(22, 31%, 88%);
    display: flex;
    align-items: center;
    padding-left: 10%;
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    font-weight: 500;
    color: hsl(22, 28%, 21%);
    a {
      color: hsl(22, 28%, 37%);
      padding: 0.5rem;
    }
    a:hover {
      color: hsl(22, 28%, 21%);
    }
  }
`;
export default PageHero;
