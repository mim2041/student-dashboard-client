import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";

const Home = () => {
    return (
        <div className=" pb-12 bg-gray-50">
            <Banner></Banner>
            <About></About>
            <Features></Features>
            <FAQ></FAQ>
            {/* <Contact></Contact> */}
        </div>
    );
};

export default Home;