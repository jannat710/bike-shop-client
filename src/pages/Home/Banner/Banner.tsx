import React from "react";
import { Button, Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "80vh",
};

const banners = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co.com/PvfJNsDk/banner1.jpg",
    alt: "Banner 1",
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co.com/20zdvJH4/banner2.jpg",
    alt: "Banner 2",
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co.com/mVcvX61b/banner3.jpg",
    alt: "Banner 3",
  },
  {
    id: 4,
    imageUrl: " https://i.ibb.co.com/R4cpQY4Z/banner4.jpg",
    alt: "Banner 4",
  },
];

const Banner = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel autoplay autoplaySpeed={1000} dots={false} effect="fade" arrows>
        {banners.map((banner) => (
          <div key={banner.id}>
            <h3 style={contentStyle}>
              <img
                src={banner.imageUrl}
                alt={banner.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </h3>

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.68)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "10%",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Ride and live today
              </p>
              <h1
                style={{
                  textTransform: "uppercase",
                  fontSize: "60px",
                  fontWeight: "bold",
                }}
              >
                We ride<br></br> together
              </h1>
              <Button
                type="primary"
                style={{
                  textTransform: "uppercase",
                  fontSize: "16px",
                  fontWeight: "bold",
                  padding: "20px 10px",
                  borderRadius: "0px",
                }}
              >
                Explore Our Rides
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
