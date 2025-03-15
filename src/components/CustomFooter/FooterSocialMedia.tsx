import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGooglePlusSquare } from "react-icons/fa";
const FooterSocialMedia = () => {
  return (
    <div className="flex items-center space-x-3 justify-center">
      <p className="font-bold hidden sm:block">SOCIAL MEDIA</p>
      <a
        href="https://www.facebook.com/jannatulfee"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary"
      >
        <FaFacebookSquare className="text-2xl " />
      </a>
      <a
        href="https://x.com/jannatul_zz"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary"
      >
        <FaSquareXTwitter className="text-2xl" />
      </a>
      <a
        href="mailto:jannatul0040@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary"
      >
        <FaGooglePlusSquare className="text-2xl" />
      </a>
    </div>
  );
};

export default FooterSocialMedia;
