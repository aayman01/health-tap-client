import { Helmet } from "react-helmet-async";
import Appointment from "./Appointment";
import Banner from "./Banner";
import NavBar from "./NavBar/NavBar";
import OurSpecalist from "./OurSpecalist";
import PopularService from "./PopularService";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HealthTap | Home</title>
      </Helmet>
      <NavBar />
      <Banner />
      <PopularService />
      <OurSpecalist />
      <Appointment />
    </div>
  );
};

export default Home;
