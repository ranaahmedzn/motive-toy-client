import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SubscribeSection from "../SubscribeSection/SubscribeSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <AboutSection></AboutSection>
            <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;