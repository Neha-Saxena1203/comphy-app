import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Product = (props) => {
  const { image, name, price, id } = props.product;

  return (
    <Wrapper>
      <div
        className="container"
        style={{ width: props.width, height: props.height }}
      >
        <img
          src={image}
          alt="product"
          style={{ width: props.width, height: props.height }}
        />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <div className="footer">
        <div>{name}</div>
        <div className="price">${price / 100}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-right: 30px;
  margin-top: 30px;
  .container {
    position: relative;
    background-color: #222;
    border-radius: 5px;
    /* width: 370px;
    height: 220px; */
    /* width: 310px;
    height: 180px; */
  }
  img {
    /* width: 370px;
    height: 220px; */
    /* width: 310px;
    height: 180px; */
    object-fit: cover;
    border-radius: 5px;
  }

  .link {
    display: block;
    position: absolute;
    top: 44%;
    left: 44%;

    background-color: hsl(22, 31%, 52%);
    opacity: 0;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    svg {
      color: white;
      font-size: 1.5rem;
    }
  }
  .container:hover img {
    opacity: 0.5;
  }

  .container:hover .link {
    opacity: 1;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    div {
      letter-spacing: 0.1rem;
      text-transform: capitalize;
    }

    .price {
      color: hsl(22, 31%, 52%);
    }
  }
`;
export default Product;
