import "./ErrorPage.css";
import { Button } from "antd";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="error-item bg-fixed text-center">
        <div className="md:flex justify-center items-center relative ">
          <div className=" text-white z-10">
            <h1 className="text-9xl text-primary">404</h1>

            <p className="text-4xl pb-1">Page not found</p>
            <p className="md:max-w-md py-4 ">
              The page you are looking for no longer exists. Perhaps you can
              return to the site's homepage and see if you can find what you are
              looking for.
            </p>
            <Link to="/">
              <Button
                type="primary"
                className="uppercase font-bold bg-primary"
                size="large"
              >
                <IoIosArrowRoundBack /> Back Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
