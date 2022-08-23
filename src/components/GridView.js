import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        return (
          //   <Product key={product.id} {...product} width="310px" height="180px" />
          <Product
            key={product.id}
            product={product}
            width="310px"
            height="180px"
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  padding-left: 4rem;
  /* padding-left: 7rem; */
  margin-bottom: 4rem;
`;
export default GridView;
