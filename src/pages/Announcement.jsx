import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/data.json";
import Rating from "../components/rates";
import Tags from "../components/tags";
import Collapse from "../components/collapse.jsx";
import "../styles/announcement.css";
import Host from "../components/host";

//import slider from "..components/slider"

const Announcement = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { title, location, equipments, host, description, rating } = product;

  return (
    <div className="oneflat">
      <div></div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="location">{location}</div>
        <div className="tag">
          {product.tags.map((tag, index) => (
            <Tags key={index} getTag={tag} />
          ))}
        </div>
      </div>

      <div className="rating">
        <Rating rating={rating} />
        <Host hostName={host.name} hostPicture={host.picture} />
      </div>

      <div className="dropdown">
        <Collapse title="Description" content={description} />
        <Collapse title="Equipement" content={equipments} />
      </div>
    </div>
  );
};

export default Announcement;
