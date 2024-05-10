import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import NavBar from "./NavBar/NavBar"

const Home = () => {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <Banner />
        <Footer />
      </div>
    );
};

export default Home;