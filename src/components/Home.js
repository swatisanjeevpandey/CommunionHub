import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <h2>Connecting People Across Faiths & Interests</h2>
        <p>Connecting people of all faiths through events and community support.</p>
        <button onClick={() => navigate("/events")}>Explore Events</button>
      </section>
    </div>
  );
};

export default Home;
