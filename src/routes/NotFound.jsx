import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="NotFound">
      <p>Oops, this page doesn't exist.</p>
      <Link to="/">Click here to go back to the homepage.</Link>
    </div>
  );
}