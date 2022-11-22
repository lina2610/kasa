import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/data.json";
import Rating from "../components/Rates.jsx";
import Tags from "../components/Tags.jsx";
import Collapse from "../components/Collapse.jsx";
import "../styles/announcement.css";
import Host from "../components/Host.jsx";

import Slider from "../components/Slider.jsx";

const Announcement = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { title, location, equipments, host, description, rating, pictures } =
    product;

  return (
    <div className="oneflat">
      <Slider slides={pictures} />
      <div className="flatcontent">
        <h2 className="title">{title}</h2>
        <div className="location">{location}</div>
        <div className="tag">
          {product.tags.map((tag) => (
            <Tags key={tag} getTag={tag} />
          ))}
        </div>
      </div>

      <div className="rating">
        <Rating rating={rating} />

        <Host picture={product.host.picture} name={product.host.name} />
      </div>
      <div className="dropdown">
        <Collapse title="Description" content={description} />

        <Collapse title="Equipement" content={equipments} />
      </div>
    </div>
  );
};

export default Announcement;
