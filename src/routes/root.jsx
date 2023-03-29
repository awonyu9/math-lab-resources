import { Outlet, useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  return (
    <div className="Root">
      <div className="header">
        <h1 onClick={() => navigate("/")}>Math Lab Resources</h1>
      </div>
      <Outlet />
    </div>
  );
}