import { Outlet } from "react-router-dom";
import Header from "../../pages/Shared/Header/Header";
import Footer from "../../pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";

const SecondaryLayout = () => {
    const {loading} = useContext(AuthContext)

    if(loading){
        return <LoadingPage />
    }
    return (
        <div>
            <div className="lg:py-8">
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default SecondaryLayout;