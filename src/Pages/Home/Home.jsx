import Banner from "./Banner";
import NavBar from "./NavBar/NavBar";
import OurSpecalist from "./OurSpecalist";
import PopularService from "./PopularService";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <PopularService />
      <OurSpecalist />
    </div>
  );
};

export default Home;
