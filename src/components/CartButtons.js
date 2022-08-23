import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { total_items, clear_cart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            clear_cart();
            localStorage.removeItem("user");
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* display: grid;
  grid-template-columns: auto 1fr;
  align-items: center; */
  width: 225px;

  .cart-btn {
    color: black;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
  }
  .cart-container {
    font-size: 1.5rem;
    position: relative;
    bottom: -3px;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }

  .cart-value {
    position: absolute;
    top: -14px;
    left: 20px;
    background-color: hsl(22, 31%, 52%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    color: white;
    padding: 4px;
  }

  .auth-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    svg {
      margin-left: 1px;
      margin-bottom: -4px;
    }
  }
`;
export default CartButtons;
