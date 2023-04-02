import { Link, useNavigate } from "react-router-dom";
import json from "../resources.json";

export default function About() {
  const navigate = useNavigate();
  const credits = json.credits;

  return (
    <div className="About">
      <div className="back" onClick={() => navigate("/")}>
        <span>Back to homepage</span>
      </div>
      <h2>Credits</h2>
      <hr />

      <p>
        All the resources on this website were compiled by the Math Lab 2022-23
        team at Wartburg College:
      </p>
      <div className="names">
        {credits.map((name, i) => (
          <p key={i}>{name}</p>
        ))}
      </div>
      <p>
        <i>Website designed and created by Alexandra Wonyu '23.</i>
      </p>
      <button>
        <Link
          to="https://outlook.office365.com/owa/calendar/PeerLabBookings@wartburgedu.onmicrosoft.com/bookings/"
          alt="Link to Math Lab booking website"
          target="_blank"
        >
          Book one of us!
        </Link>
      </button>
    </div>
  );
}