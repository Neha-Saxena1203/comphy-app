import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartContent from "../components/CartContent";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className="empty">
          <h1>Your cart is empty</h1>
          <button className="fill-btn">
            <Link to="/products">Fill It</Link>
          </button>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <PageHero title="cart" />
      <Wrapper>
        <CartContent cart={cart} />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    min-height: calc(100vh - 14.8rem);

    h1 {
      font-size: 2.8rem;
      margin-top: 4rem;
      color: hsl(209, 61%, 16%);
      margin-bottom: 0;
    }

    .fill-btn {
      width: 80px;
      height: 33px;
      letter-spacing: 0.1rem;
      font-size: 0.8rem;
      text-transform: uppercase;
      border: none;
      border-radius: 5px;
      background-color: hsl(22, 31%, 52%);
      color: white;
      margin-top: 0.5rem;

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
  }
`;
export default CartPage;
