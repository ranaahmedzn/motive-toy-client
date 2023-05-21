import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import Header from "../../pages/Shared/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";

const MainLayout = () => {
    const {loading} = useContext(AuthContext)

    if(loading){
        return <LoadingPage />
    }

    return (
        <div>
            <div className="w-full h-full lg:py-8 overflow-hidden bg-[#0787EA]">
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;