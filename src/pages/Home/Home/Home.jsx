import About from "../About/About";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";

const Home = () => {
    return (
        <div className=" pb-12 bg-gray-50">
            <Banner></Banner>
            <About></About>
            <Features></Features>
        </div>
    );
};

export default Home;