import React from "react";
import styled from "styled-components";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ item }) => {
  const { remove_cart_item, toggleCartAmount } = useCartContext();

  //   const [amount, setAmount] = useState(item.amount);
  const increase = () => {
    toggleCartAmount(item.id, "inc");
  };

  const decrease = () => {
    toggleCartAmount(item.id, "dec");
  };

  return (
    <Wrapper>
      <div className="cart-main-item">
        <section className="col1">
          <img src={item.image} alt="item" />
          <div>
            <h4>{item.name}</h4>
            <div className="color">
              Color:
              <div className="sqare" style={{ background: item.color }}></div>
            </div>
          </div>
        </section>
        <section className="col2">${item.price / 100}</section>
        <section className="col3">
          <AmountButtons
            amount={item.amount}
            increase={increase}
            decrease={decrease}
          />
        </section>
        <section className="col4">${(item.price / 100) * item.amount}</section>
        <section className="col5" onClick={() => remove_cart_item(item.id)}>
          <div className="delete">
            <FaTrash />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cart-main-item {
    display: grid;
    grid-template-columns: 1.7fr 1fr 1fr 1fr 0.5fr;
    text-align: center;
    padding-left: 2rem;
  }

  .col1 {
    display: flex;
    margin-top: 2rem;
    img {
      width: 120px;
      object-fit: cover;
      border-radius: 5px;
      margin-left: 1rem;
    }

    h4 {
      letter-spacing: 0.1rem;
      text-transform: capitalize;
      margin-left: 1rem;
      text-align: left;
      color: hsl(209, 61%, 16%);
      font-size: 0.9rem;
    }

    .color {
      text-align: left;
      margin-left: 1rem;
      margin-top: -1rem;
      color: hsl(210, 22%, 49%);
      font-size: 0.9rem;
    }

    .sqare {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 3px;
      margin-left: 0.5rem;
      margin-bottom: -2px;
    }
  }

  .col2 {
    margin-top: 3.2rem;
    color: hsl(22, 31%, 52%);
  }

  .col3 {
    display: flex;
    justify-content: center;
  }

  .col4 {
    margin-top: 3.2rem;
    display: block;
    color: hsl(210, 22%, 49%);
  }

  @media (max-width: 540px) {
    .col4 {
      display: none;
    }
  }

  .col5 {
    display: flex;
    justify-content: center;
    align-items: center;
    .delete {
      width: 24px;
      height: 25px;
      background-color: hsl(360, 67%, 44%);
      border-radius: 4px;

      svg {
        color: white;
        margin-top: 6px;
        font-size: 0.8rem;
      }
    }
  }
`;

export default CartItem;
