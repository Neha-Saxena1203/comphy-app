import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import Loading from "./Loading";
import Product from "./Product";
import Error from "./Error";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured = [],
  } = useProductsContext();

  // console.log("Resonse: " + JSON.stringify(featured));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <h1>Featured Products</h1>
      <hr className="line" />
      <div className="centered featured">
        {featured.slice(0, 3).map((product) => {
          return (
            // <Product
            //   key={product.id}
            //   {...product}
            //   width="370px"
            //   height="220px"
            // />
            <Product
              key={product.id}
              product={product}
              width="370px"
              height="220px"
            />
          );
        })}
      </div>
      <button className="btn">ALL PRODUCTS</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 30%;
  background: hsl(210, 36%, 96%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    font-size: 2rem;
    letter-spacing: 0.1rem;
    margin-top: 3.5rem;
  }

  .line {
    width: 100px;
    height: 4px;
    background-color: hsl(22, 31%, 52%);
    position: absolute;
    top: 90px;
    border: none;
  }

  .centered {
    margin-top: 2rem;
    display: flex;
    /* flex-wrap: wrap; */
  }

  .btn {
    margin-top: 4rem;
    background: none;
    border: none;
    letter-spacing: 0.1rem;
    background-color: hsl(22, 31%, 52%);
    border-radius: 4px;
    padding: 12px 25px;
    margin-bottom: 4rem;
    color: white;
  }

  .btn:hover {
    color: hsl(22, 28%, 21%);
    background-color: hsl(22, 31%, 67%);
    cursor: pointer;
  }

  @media (max-width: 992px) {
    .centered {
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export default FeaturedProducts;
