import BusinessSummary from "./BusinessSummary";
import HomeBanner from "./HomeBanner";
import MidCard from "./MidCard";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <BusinessSummary></BusinessSummary>
            <MidCard></MidCard>
        </div>
    );
};

export default Home;