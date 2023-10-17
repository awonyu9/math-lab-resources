import "./root.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

export default function Root() {
  const navigate = useNavigate();
  return (
    <div className="Root">
      <ScrollToTop />

      <div className="header">
        <div className="wartburg-logo"></div>
        <h1 onClick={() => navigate("/")}>Math Lab Resources</h1>
      </div>

      <Outlet />

      <div className="footer">
        <button className="top" onClick={() => window.scrollTo(0, 0)}>
          Back to top
        </button>
        <div className="wartburg-logo"></div>
        <h4>
          <Link
            to="https://www.wartburg.edu/peer-learning/"
            alt="Link to Peer Learning Lab webpage"
            target="_blank"
          >
            Peer Learning Lab 2022-23
          </Link>
          ・
          <Link
            to="https://www.wartburg.edu/peer-learning/#math"
            alt="Link to Peer Learning Lab website, Math Lab tab"
            target="_blank"
          >
            Math Lab
          </Link>
          ・
          <Link to="/about" alt="Link to About page">
            About us
          </Link>
        </h4>
      </div>
    </div>
  );
}
