import { Helmet } from "react-helmet-async";
import Appointment from "./Appointment";
import Banner from "./Banner";
import NavBar from "./NavBar/NavBar";
import OurSpecalist from "./OurSpecalist";
import PopularService from "./PopularService";
import Faq from "./Faq";

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
      <Faq/>
    </div>
  );
};

export default Home;
