import React from "react";
import styled from "styled-components";

import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <Wrapper>
        <h1>Sorry, no products macthed your search...</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {grid_view ? (
        <GridView products={products} />
      ) : (
        <ListView products={products} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* display: flex;
  flex-wrap: wrap;

  padding-top: 4rem;
  padding-left: 7rem;
  margin-bottom: 4rem; */
  h1 {
    font-size: 1.1rem;
    margin-left: 4rem;
    color: hsl(209, 61%, 16%);
  }
`;
export default ProductList;
