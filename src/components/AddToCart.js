import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const { add_To_Cart } = useCartContext();

  // console.log("Cart: " + JSON.stringify(cart));

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="cart-main">
        <div>Colors:</div>
        <div className="parent-div">
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                } ${index > 0 ? "margin-class" : ""}`}
                onClick={() => setMainColor(colors[index])}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <button
        className="cart-btn"
        type="button"
        onClick={() => add_To_Cart(id, mainColor, amount, product)}
      >
        <Link to="/cart">Add to cart</Link>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cart-main {
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin-top: 2rem;

    .parent-div {
      display: flex;
    }
    .color-btn {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: none;

      margin-top: -5px;
      opacity: 0.5;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 0.8rem;
        color: white;
      }
    }

    .active {
      opacity: 1;
    }

    .margin-class {
      margin-left: 8px;
    }
  }

  .cart-btn {
    margin-top: 2rem;
    width: 25%;
    height: 33px;
    border: none;
    background: #c1896b;
    border-radius: 5px;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    text-transform: uppercase;

    a {
      color: white;
    }

    &:hover {
      background-color: hsl(22, 31%, 67%);
      cursor: pointer;

      a {
        color: hsl(22, 28%, 21%);
      }
    }
  }
`;
export default AddToCart;
