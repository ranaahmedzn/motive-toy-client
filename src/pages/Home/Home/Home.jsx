import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Motive Toy | Home</title>
            </Helmet>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <AboutSection></AboutSection>
            <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;