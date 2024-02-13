import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.jpg";

const Banner = () => {
    return (
        <div
            className="w-full bg-cover bg-center"
            style={{
                height: "34rem",
                background: `url(${banner})`,
                backgroundSize: "cover",
            }}
        >
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
                        FORGE Your new <span className=" text-orange-500">Future</span> with <br />
                        <span className="text-orange-500 font-bold">CrossRoads Initiative</span>
                    </h1>
                    <p className="mt-2 text-lg text-slate-200">
                        Your future is a vast horizon, brimming with opportunities waiting to be seized. 
                        CrossRoads Initiative stands as your beacon of <br/>  guidance, 
                        dedicated to empowering students like you to pursue academic excellence abroad through scholarships.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-orange-500 text-white text-sm uppercase font-medium rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
                        <Link to="/">Start Now</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;