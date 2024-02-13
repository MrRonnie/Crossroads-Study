import { Link } from "react-router-dom";
import notfound from "../../../assets/images/404.gif";
import PrimaryButton from "../PrimaryButton/PrimaryButton";


const NotFound = () => {
  return (
    <div>
      <div className="mt-10 mb-10 text-center bg-white">
        <h1 className="text-accent  text-8xl">
          4<span className="text-gray-500">0</span>4
        </h1>
        <p className="mt-3 mb-3 text-gray-400 text-2xl">
          The page you requested could not found !!
        </p>
        <Link to="/">
          <PrimaryButton>Go to Homepage</PrimaryButton>
        </Link>

        <div className="w-full mx-auto flex justify-center">
          <img src={notfound} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
