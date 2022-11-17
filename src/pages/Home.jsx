import React from "react";
import { Link } from "react-router-dom";

import products from "../data/data.json";

import Banner from "../components/Banner.jsx";
import "../styles/home.css";
import Card from "../components/Card.jsx";

const Products = () => {
  return (
    <div className="home">
      <div className="home_banner">
        <Banner />
      </div>{" "}
      <section className="home_appartments">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`} className="cardlink">
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
