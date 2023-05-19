import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import Header from "../../pages/Shared/Header/Header";

const MainLayout = () => {
    return (
        <div>
            <div className="w-full h-full lg:py-8 bg-[#0787EA]">
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;