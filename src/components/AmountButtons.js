import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "styled-components";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <Wrapper>
      <div className="amt-class">
        <FaMinus onClick={decrease} />
        <div>{amount}</div>
        <FaPlus onClick={increase} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  .amt-class {
    width: 25%;
    /* width: 100%; */
    display: grid;
    grid-template-columns: auto auto auto;

    div {
      font-size: 2.3rem;
      font-weight: bold;
      color: #000000ae;
      margin-top: -0.9rem;
    }

    svg {
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
`;
export default AmountButtons;
