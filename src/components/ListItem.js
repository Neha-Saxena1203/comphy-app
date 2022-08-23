import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = ({ product }) => {
  const { id, name, image, price, description } = product;

  return (
    <Wrapper>
      <section className="detail-con">
        <img src={image} alt="item" />
        <div className="details">
          <h2>{name}</h2>
          <p className="price">${price / 100}</p>
          <p>{description}</p>
          <button className="btn">
            <Link to={`/products/${id}`}>Details</Link>
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .detail-con {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 2rem;

    img {
      width: 310px;
      height: 200px;
      border-radius: 5px;
      object-fit: cover;
      margin-bottom: 1.5rem;
    }

    .details {
      padding-left: 2rem;
      margin-top: -2px;
    }

    h2 {
      text-transform: capitalize;
      font-size: 1.5rem;
    }

    .price {
      color: hsl(22, 31%, 60%);
      font-size: 1rem;
      font-weight: 600;
      margin-top: -15px;
    }
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.6;
      padding-right: 6rem;
      margin-top: -5px;
    }

    .btn {
      border: none;
      background-color: hsl(22, 31%, 52%);
      border-radius: 4px;
      font-size: 0.5rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      padding: 5px 6px;

      a {
        color: white;
      }

      &:hover {
        background-color: hsl(22, 31%, 67%);
        a {
          color: black;
        }
      }
    }
  }
`;
export default ListItem;
