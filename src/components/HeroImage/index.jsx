import React from "react";

const HomeImage = ({ image, title, text }) => {
  return (
    <div>
      <img src={image} alt="img" />
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HomeImage;
