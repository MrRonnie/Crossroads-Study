import bg from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";
import Info from "./Info";


const ContactUs = () => {
  return (
    <>
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="bg-primary px-10 py-10 rounded "
    >
      <div className="text-center pb-14 text-white">
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br text-orange-500">
          Contact Us
        </p>
        <h1 className="text-4xl">Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="email"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
      
    </div>
    <Info></Info>
    </>
  );
};

export default ContactUs;