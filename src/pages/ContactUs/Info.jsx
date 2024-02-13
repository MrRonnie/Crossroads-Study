
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12">
      <InfoCard
        cardTitle="Opening Hours"
        cardDetail="Open Everyday 9:00 AM to 5:00 PM"
        bgClass=" bg-gray-500"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Visit our location"
        cardDetail="Brooklyn, NY 10096, United States"
        bgClass="bg-orange-500"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        cardDetail="+880 1782-412227"
        bgClass=" bg-gray-500"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
