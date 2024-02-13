import quote from "../../assets/icons/quote.svg";

const Reviews = () => {
 

  return (
    <div className="my-28 px-2 ">
      <div className="flex justify-between">
        <div>
          <h4 className="text-2xl  font-bold text-orange-500">Testimonials</h4>
          <h2 className="text-3xl ">What Our Clients Says</h2>
        </div>
        <div>
          <img src={quote} className="lg:w-48 w-24" alt="" />
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-5   py-10">
      
      </div>
    </div>
  );
};

export default Reviews;