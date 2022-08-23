import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartContent = (cart) => {
  const { total_amount, shipping_fee, clear_cart } = useCartContext();
  const { loginWithRedirect, myUser } = useUserContext();

  return (
    <Wrapper>
      <div className="cart-main">
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
        <div className="total">Subtotal</div>
      </div>
      <hr className="line" />
      {cart.cart.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
      <hr className="line" />

      <section className="buttons-cls">
        <button className="cart-btn" type="button">
          <Link to="/products">Continue Shopping</Link>
        </button>
        <button
          className="cart-btn"
          type="button"
          style={{ background: "#000" }}
          onClick={clear_cart}
        >
          Clear Shopping Cart
        </button>
      </section>
      <section className="align-right">
        <div className="box">
          <div className="total-cls">
            <div>
              <div className="class1">Subtotal:</div>
              <div className="top-margin ">Shipping Fee:</div>
            </div>
            <div>
              <div className="class1">${total_amount / 100}</div>
              <div className="top-margin ">${shipping_fee / 100}</div>
            </div>
          </div>
          <hr className="top-margin" />
          <div className="total-cls">
            <div>
              <div className="top-margin class2">Order Total:</div>
            </div>
            <div>
              <div className="top-margin class2">
                ${(total_amount + shipping_fee) / 100}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="btn-parent">
        {myUser ? (
          <button className="log-btn">
            <Link to="checkout"> Proceed with checkout</Link>
          </button>
        ) : (
          <button className="log-btn" onClick={loginWithRedirect}>
            Login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;

  .total {
    display: block;
  }

  @media (min-width: 960px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (max-width: 540px) {
    .total {
      display: none;
    }
  }

  .cart-main {
    display: grid;
    grid-template-columns: 1.7fr 1fr 1fr 1fr 0.5fr;
    text-align: center;
    color: hsl(210, 22%, 49%);
  }

  .line {
    margin-top: 2rem;
    border: none;
    border-top: 1px solid hsl(210, 31%, 80%);
    margin-left: 3rem;
    margin-right: 3rem;
  }

  .buttons-cls {
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
  }

  .cart-btn {
    margin-top: 2rem;
    /* width: 17%; */
    width: 190px;
    height: 33px;
    border: none;
    background: #c1896b;
    border-radius: 5px;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    text-transform: capitalize;
    color: white;

    a {
      color: white;
    }

    &:hover {
      background-color: hsl(22, 31%, 67%);
      cursor: pointer;
      color: hsl(22, 28%, 21%);
      a {
        color: hsl(22, 28%, 21%);
      }
    }
  }

  .align-right {
    display: flex;
    justify-content: end;

    .box {
      margin-top: 2rem;
      margin-right: 3rem;
      width: 315px;
      /* width: 25%; */
      height: 8.5rem;
      border: 1px solid lightgrey;
      border-radius: 4px;
      padding: 2rem;
    }
    .total-cls {
      display: grid;
      grid-template-columns: 1fr 0.5fr;
    }

    .top-margin {
      margin-top: 1.1rem;
      font-size: 1rem;
    }

    .class2 {
      font-size: 1.4rem;
      font-weight: 600;
      /* .extra {
        padding-left: 20px;
      } */
    }
  }

  .class1 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .btn-parent {
    text-align: right;
    margin-right: 3rem;
    margin-top: 1rem;
    .log-btn {
      /* width: 31.5%; */
      width: 380px;
      height: 33px;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      border: none;
      background: #c1896b;
      border-radius: 5px;
      color: white;
      font-size: 1rem;

      a {
        color: white;
      }

      &:hover {
        background-color: hsl(22, 31%, 67%);
        cursor: pointer;
        color: hsl(22, 28%, 21%);
      }

      a:hover {
        color: hsl(22, 28%, 21%);
      }
    }
  }
`;
export default CartContent;
