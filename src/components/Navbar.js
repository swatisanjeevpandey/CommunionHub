import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1>CommunionHub</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
    </div>
  </nav>
);

export default Navbar;
