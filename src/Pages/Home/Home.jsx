import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import NavBar from "./NavBar/NavBar"
import PopularService from "./PopularService";

const Home = () => {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <Banner />
        <PopularService/>
        <Footer />
      </div>
    );
};

export default Home;