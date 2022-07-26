import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faGear,
  faIdCard,
  faLightbulb,
  faNewspaper,
  faPieChart,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navlink-main">
        Dashboard
      </Link>
      <div className="navlinks">
        <Link to="/overview" className="navlink">
          <FontAwesomeIcon icon={faPieChart} className="navicon" />
          Overview
        </Link>
        <Link to="/users" className="navlink">
          <FontAwesomeIcon icon={faIdCard} className="navicon" />
          Users
        </Link>
        <Link to="/ideas" className="navlink">
          <FontAwesomeIcon icon={faLightbulb} className="navicon" />
          Ideas
        </Link>
        <Link to="/contacts" className="navlink">
          <FontAwesomeIcon icon={faUsers} className="navicon" />
          Contacts
        </Link>
        <Link to="/agents" className="navlink">
          <FontAwesomeIcon icon={faUserTie} className="navicon" />
          Agents
        </Link>
        <Link to="/articles" className="navlink">
          <FontAwesomeIcon icon={faNewspaper} className="navicon" />
          Articles
        </Link>
        <Link to="/settings" className="navlink">
          <FontAwesomeIcon icon={faGear} className="navicon" />
          Settings
        </Link>
        <Link to="/subscription" className="navlink">
          <FontAwesomeIcon icon={faAward} className="navicon" />
          Subscription
        </Link>
      </div>
    </nav>
  );
};
