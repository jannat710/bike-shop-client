import { Button, Carousel } from "antd";

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
    <div className="relative">
      <Carousel autoplay autoplaySpeed={3000} dots={false} effect="fade" arrows>
        {banners.map((banner) => (
          <div key={banner.id}>
            <h3 className="contentStyle">
              <img
                src={banner.imageUrl}
                alt={banner.alt}
                className="w-full h-full object-cover"
              />
            </h3>

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60" />
            <div className="absolute top-[20%] left-[10%] text-white text-base font-bold uppercase">
              <p className="">Ride and live today</p>
              <h1 className="text-6xl py-4">
                We ride<br></br> together
              </h1>
              <Button
                className="uppercase font-bold"
                type="primary"
                size="large"
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
