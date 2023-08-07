import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import Customers from "../Customers/Customers";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
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
            <PhotoGallery></PhotoGallery>
            <ShopByCategory></ShopByCategory>
            <Benefits></Benefits>
            <AboutSection></AboutSection>
            <Customers></Customers>
            <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;