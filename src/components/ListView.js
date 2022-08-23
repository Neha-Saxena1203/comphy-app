import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const ListView = (props) => {
  // const { id, name, price, image } = props.products;
  const products = props.products;
  return (
    <Wrapper>
      {products.map((product) => {
        return <ListItem key={product.id} product={product} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-left: 4rem;
  /* padding-left: 7rem; */
  margin-bottom: 2rem;
`;
export default ListView;
