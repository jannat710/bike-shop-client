import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "80vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  fontSize: "24px",
};

const Banner = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel autoplay autoplaySpeed={5000} dots={false} arrows>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
