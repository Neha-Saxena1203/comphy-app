import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    all_products,
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
  } = useFilterContext();

  // console.log(category, company);

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="form-con">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Start of search input */}
          <div>
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* End of search input */}

          {/* Start of Category */}
          <div className="category">
            <h3>Category</h3>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  name="category"
                  type="button"
                  className={`${
                    category === c.toLowerCase() ? "active" : null
                  } ${index === 0 ? "btn-margin company-btn" : "company-btn"}`}
                >
                  {c}
                </button>
              );
            })}
          </div>
          {/* Start of Category */}

          {/* Start of Company */}
          <div className="category">
            <h3>Company</h3>
            <select
              name="company"
              className="drop-down"
              value={company}
              onChange={updateFilters}
            >
              {companies.map((c, index) => {
                return (
                  <option value={c} key={index}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* End of Company */}

          {/* Start of Colors */}
          <div className="category">
            <h3>Colors</h3>
            <section className="colors-cls">
              <button
                onClick={updateFilters}
                className={`${
                  color === "all" ? "color-btn active" : "color-btn"
                }`}
                name="color"
                value={colors[0]}
                type="button"
              >
                {colors[0]}
              </button>
              {colors.map((c, index) => {
                return index > 0 ? (
                  <button
                    className={`${
                      color === c ? "circle circle-selected" : "circle"
                    }`}
                    style={{ backgroundColor: c }}
                    key={index}
                    name="color"
                    value={c}
                    onClick={updateFilters}
                    type="button"
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                ) : (
                  ""
                );
              })}
            </section>
          </div>
          {/* End of Colors */}

          {/* Start of Price */}
          <div className="category">
            <h3>Price</h3>
            <p>${price / 100}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* End of Price */}

          {/* Start of Shipping */}
          <div className="category shipping">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* End of Shipping */}

          <div className="btn-parent">
            <button type="button" className="clr-btn" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: right;
  .form-con {
    margin-top: 3rem;
    /* margin-left: 5rem; */
    /* padding-right: -5rem; */
    .search-input {
      width: 170px;
      height: 35px;
      border: none;
      background-color: hsl(210, 36%, 96%);
      border-radius: 5px;
      font-size: 1.1rem;
      &::placeholder {
        letter-spacing: 0.1rem;
      }
    }
    input {
      padding-left: 8px;
    }

    .category {
      text-align: left;
      margin-left: 4.5rem;

      .company-btn {
        display: block;
        margin: 0.25rem 0;
        padding: 0.25rem 0;
        cursor: pointer;
        text-align: left;
        background: transparent;
        border: none;
        border-bottom: 1px solid transparent;
        font-size: 0.9rem;
        color: gray;
        text-transform: capitalize;
      }

      .btn-margin {
        margin-top: -10px;
      }

      .active {
        border-color: gray;
      }

      h3 {
        letter-spacing: 0.1rem;
        font-size: 1rem;
      }
      .drop-down {
        font-size: 0.9rem;
        padding: 0.25rem;
        border: none;
        background-color: hsl(210, 36%, 96%);
        border-radius: 5px;
      }

      .colors-cls {
        display: flex;

        .color-btn {
          margin: 0.25rem 0;
          padding: 0.25rem 0;
          text-transform: capitalize;
          background: none;
          border: none;
          border-bottom: 1px solid transparent;
          font-size: 1rem;
          color: gray;
          margin-top: -4px;
        }

        .active {
          border-color: gray;
        }

        .circle {
          width: 19px;
          height: 19px;
          border-radius: 50%;
          margin-left: 8px;
          background: none;
          border: none;
          opacity: 0.4;
          display: flex;
          align-items: center;
          /* justify-content: center; */
          svg {
            color: white;
            font-size: 0.5rem;
          }
        }

        .circle-selected {
          opacity: 1.5;
        }
      }
    }

    .shipping {
      margin-top: 1.8rem;

      label {
        font-size: 1.1rem;
      }

      input {
        margin-left: 3rem;
      }
    }

    .btn-parent {
      display: flex;
      justify-content: center;

      .clr-btn {
        margin-top: 2rem;
        margin-left: 1.4rem;
        align-items: flex-start;
        width: 130px;
        height: 28px;
        font-size: 0.9rem;
        letter-spacing: 0.15rem;
        border: none;
        background-color: hsl(360, 67%, 44%);
        border-radius: 5px;
        color: white;
      }
    }
  }
`;
export default Filters;
