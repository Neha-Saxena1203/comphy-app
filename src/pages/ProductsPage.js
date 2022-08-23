import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="Products" />
      <Wrapper>
        <div className="products">
          <Filters />
          <div className="main">
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    /* display: grid;
    grid-template-columns: 1fr 2fr; */

    display: grid;
    grid-template-columns: 250px 1fr;
  }

  .main {
    /* width: 1200px; */
    /* width: 1050px; */
    margin-top: 3rem;
  }
`;
export default ProductsPage;
