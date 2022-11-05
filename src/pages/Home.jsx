import React from "react";
import { Link } from "react-router-dom";

import products from "../data/data.json";
import image from "../images/IMG.png";
import Banner from "../components/Banner.jsx";
import "../styles/home.css";
import Card from "../components/card.jsx";

const textbanner = "Chez vous, partout et ailleurs";

const Products = () => {
  return (
    <div className="home">
      <div className="home_banner">
        <Banner image={image} title={textbanner} />
      </div>{" "}
      <section className="home_appartments">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Card image={product.cover} title={product.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
