import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { FaBars } from "react-icons/fa";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/home">
            <img src={logo} alt="comphy sloth" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li> {myUser && <Link to="/checkout">Checkout</Link>}</li>
        </ul>

        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 175px;
      margin-left: -15px;
    }

    /* display: grid;
    grid-template-columns: auto auto;
    align-items: center; */
  }

  .nav-toggle {
    display: block;
    background: transparent;
    border: transparent;
    color: hsl(22, 31%, 52%);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .cart-btn-wrapper {
    display: none;
  }

  .nav-links {
    display: none;
  }

  @media (min-width: 792px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center; */
    }

    .nav-links {
      display: flex;
      /* justify-content: center; */
      /* align-items: center; */
      li {
        margin: 0 0.5rem;
      }
      a {
        color: hsl(209, 34%, 30%);
        font-size: 1rem;
        letter-spacing: 0.1rem;
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid hsl(22, 31%, 60%);
        }
      }
    }

    .cart-btn-wrapper {
      display: flex;
    }
  }
`;
export default Navbar;
