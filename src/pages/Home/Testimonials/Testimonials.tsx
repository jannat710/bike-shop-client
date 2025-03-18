import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div>
      <SectionTitle subtitle="Testimonial" title="What they say about us" />

      <div>
        <div className="featured-item bg-fixed text-center p-12">
          <div className="md:flex justify-center items-center bg-black bg-opacity-60 pb-20">
            <div className="md:ml-10 text-white">
              <p>Dec 20, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
