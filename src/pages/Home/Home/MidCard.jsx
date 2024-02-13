
import { useNavigate } from "react-router-dom";
import card from "../../../assets/images/mid-card.jpg";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";


const MidCard = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen justify-center mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse gap-14 px-24">
        <img src={card} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold ">
            In the mind of every artist there is a Masterpiece
          </h1>
          <p className="py-6 text-justify">
            Forge your new future with CrossRoads Initiative, where your aspirations take flight, 
            and the world becomes your classroom. Let us guide you on this transformative journey, 
            where scholarship opportunities await at every turn, leading you to a brighter, more promising tomorrow.
          </p>
          <PrimaryButton>
            <span onClick={() => navigate("/")}>Book Now</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default MidCard;
