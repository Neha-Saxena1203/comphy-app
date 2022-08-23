import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <div className="main-img">
        <img src={main.url} alt="item pic" />
      </div>

      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.url}
              alt={image.filename}
              className={`${index > 0 ? "margin-class" : ""} ${
                image.url === main.url ? "active" : ""
              }`}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .main-img {
    img {
      width: 550px;
      border-radius: 5px;
      object-fit: cover;
    }
  }

  .gallery {
    margin-top: 1rem;
    grid-template-columns: repeat(5, 1fr);

    img {
      height: 70px;
      cursor: pointer;
      border-radius: 5px;
      object-fit: cover;
    }

    .margin-class {
      margin-left: 10px;
    }

    .active {
      border: 2px solid hsl(22, 31%, 52%);
    }
  }
`;
export default ProductImages;
