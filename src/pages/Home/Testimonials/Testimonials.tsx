import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Testimonials.css";

import { Carousel } from "antd";

const reviews = [
  {
    name: "John Doe",
    image: "https://i.ibb.co.com/9khYPsfq/men2.jpg",
    designation: "CEO at TechCorp",
    review:
      "Exceptional service! The team was professional, responsive, and delivered outstanding results. They truly understand client needs and go the extra mile. Highly recommended for anyone looking for top-quality work and reliability.",
  },
  {
    name: "Sarah Lee",
    image: "https://i.ibb.co.com/W4ZRJ2QR/hgg.jpg",
    designation: "Marketing Manager at BrandX",
    review:
      "Absolutely fantastic experience! Their attention to detail, creativity, and execution were beyond expectations. The project was completed on time, and communication was seamless. A pleasure to work with such dedicated professionals.",
  },
  {
    name: "Michael Smith",
    image: "https://i.ibb.co.com/s9DQvbLQ/men.jpg",
    designation: "Director at Innovate Ltd.",
    review:
      "Reliable, efficient, and highly skilled team! They transformed our ideas into reality with precision and innovation. I appreciate their commitment to excellence and the seamless collaboration throughout the project.",
  },
  {
    name: "Emily Johnson",
    image: "https://i.ibb.co.com/ZpcCyW93/ul.png",
    designation: "Product Designer at Creatify",
    review:
      "Top-notch quality and professionalism! The team listened carefully to our requirements and executed flawlessly. Their problem-solving skills and creative approach truly set them apart. Will definitely collaborate with them again!",
  },
];

const Testimonials = () => {
  return (
    <div>
      <SectionTitle subtitle="Testimonial" title="What they say about us" />
      <div className="featured-item bg-fixed text-center p-12">
        <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000} arrows>
          {reviews.map((review, index) => (
            <div key={index}>
              <div className="py-24 flex items-center justify-center text-white bg-black bg-opacity-60">
                <div className="">
                  <h1 className="text-base max-w-2xl italic font-normal">
                    {review.review}
                  </h1>
                  <div className="flex justify-center items-center gap-4 pt-4">
                    <div>
                      <img
                        src={review.image}
                        alt="review"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-primary font-medium">
                        {review.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
