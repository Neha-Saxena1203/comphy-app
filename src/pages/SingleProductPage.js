import React from "react";
import { useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { useParams } from "react-router-dom";

import { single_product_url as url } from "../utils/constants";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useHistory, Link } from "react-router-dom";
import AddToCart from "../components/AddToCart";

const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  const history = useHistory();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // console.log("Response: " + JSON.stringify(product));
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="main">
        <button className="btn" type="button">
          <Link to="/products">Back to products</Link>
        </button>

        <div className="container">
          <ProductImages images={images} />

          <div className="con1">
            <h1 className="name">{name}</h1>
            <Stars stars={stars} reviews={reviews} />
            <h3 className="price">${price / 100}</h3>
            <p className="desc">{description}</p>
            <div className="con2">
              <div className="sec1">
                <p>Available:</p>
                <p>SKU:</p>
                <p>Brand:</p>
              </div>
              <div>
                <p>{stock > 0 ? "In Stock" : "Out of Stock"}</p>
                <p>{sku}</p>
                <p>{company}</p>
              </div>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main {
    padding: 5rem;
  }
  .btn {
    width: 15%;
    height: 35px;
    letter-spacing: 0.1rem;
    border-radius: 5px;
    background: #c1896b;
    border: none;
    font-size: 0.8rem;
    text-transform: uppercase;

    a {
      color: white;
    }

    &:hover {
      background-color: hsl(22, 31%, 67%);
      cursor: pointer;

      a {
        color: hsl(22, 28%, 21%);
      }
    }
  }

  .container {
    display: grid;
    grid-template-columns: auto auto;
  }

  .con1 {
    padding-left: 4rem;
  }
  .con2 {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }

  .name {
    font-size: 2.5rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    margin-bottom: 0;
  }

  .price {
    color: hsl(22, 31%, 52%);
    letter-spacing: 0.1rem;
    margin-top: 0;
  }

  .desc {
    line-height: 2;
  }

  .sec1 {
    font-weight: bold;
  }

  hr {
    /* color: hsl(210, 31%, 80%); */
    border: none;
    border-top: 1px solid hsl(210, 31%, 80%);
  }

  @media (max-width: 1080px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: left;
      padding-left: 0;
    }
  }
`;
export default SingleProductPage;
