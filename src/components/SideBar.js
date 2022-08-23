import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";

const SideBar = () => {
  const { isSideBarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <SideBarContainer>
      <aside
        className={`${isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="header">
          <img src={logo} alt="comphy logo" />
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            {" "}
            {myUser && (
              <Link to="/checkout" onClick={closeSidebar}>
                Checkout
              </Link>
            )}
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  /* text-align: center; */

  .header {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 1rem 1.5rem;

    img {
      justify-self: center;
      height: 45px;
    }
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: hsl(360, 67%, 44%);
    transition: all 0.3s linear;
    cursor: pointer;
    margin-top: 0.2rem;
  }

  .close-btn:hover {
    color: hsl(360, 71%, 66%);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .links {
    /* margin-bottom: 2rem; */

    a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: hsl(209, 34%, 30%);
      transition: all 0.3s linear;
      letter-spacing: 0.1rem;
      &:hover {
        /* padding: 1rem 1.5rem; */
        padding-left: 2rem;
        background: hsl(210, 36%, 96%);
        color: hsl(211, 39%, 23%);
      }
    }
  }

  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  @media (min-width: 792px) {
    .sidebar {
      display: none;
    }
  }
`;

export default SideBar;
