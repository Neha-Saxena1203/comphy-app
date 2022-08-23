import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          className={`${grid_view ? "active" : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          className={`${!grid_view ? "active" : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>

      <p className="text">{products.length} Products Found</p>

      <div>
        <hr className="line" />
      </div>
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highst)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr 0.5fr;
  /* padding-left: 7rem; */
  padding-left: 4rem;
  /* text-align: left; */

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;

    button {
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: 1px solid black;
      cursor: pointer;
      svg {
        font-size: 1.5rem;
      }
    }

    .active {
      border-radius: 5px;
      border: none;
      background: black;
      color: white;
    }
  }

  .text {
    margin-left: 20px;
    padding-top: 0;
    margin-top: 5px;
  }

  .line {
    margin-left: 2rem;
    width: 90%;
    border: none;
    border-bottom: 1px solid lightgray;
    margin-top: 12px;
    display: block;
  }

  .sort-input {
    border: transparent;
    font-size: 1rem;
    padding: 0.25rem 0.25rem;
    text-transform: capitalize;
  }

  label {
    text-transform: capitalize;
    font-size: 1rem;
    margin-right: 5px;
  }

  @media (max-width: 892px) {
    /* grid-template-columns: auto auto 1fr 0.5fr; */
    grid-template-columns: auto auto 0.1fr 1fr;
    .line {
      margin-left: 2rem;
      width: 90%;
      border: none;
      border-bottom: 1px solid lightgray;
      margin-top: 12px;
      display: none;
    }
  }
`;
export default Sort;
