import React, { useEffect, useReducer } from "react";
import { useContext } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispacth] = useReducer(reducer, initialState);

  useEffect(() => {
    dispacth({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispacth({ type: SORT_PRODUCTS });
    dispacth({ type: FILTER_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispacth({ type: SET_GRID_VIEW });
  };

  const setListView = () => {
    dispacth({ type: SET_LIST_VIEW });
  };

  const updateSort = (e) => {
    dispacth({ type: UPDATE_SORT, payload: e.target.value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(e.target);

    console.log(name, value);

    if (name === "category") {
      value = e.target.textContent;
    }

    if (name === "colors") {
      value = e.target.value;
    }

    if (name === "price") {
      value = Number(value);
    }

    if (name === "shipping") {
      value = e.target.checked;
    }
    console.log(name, value);

    dispacth({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispacth({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setListView,
        setGridView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
