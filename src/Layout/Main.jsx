import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import ScrollToTop from "../Utility/ScrollToTop";

const Main = () => {
    return (
        <div>
            <ScrollToTop/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;