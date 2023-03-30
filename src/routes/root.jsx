import { Outlet, useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  return (
    <div className="Root">
      <div className="header">
        <div className="wartburg-logo"></div>
        <h1 onClick={() => navigate("/")}>Math Lab Resources</h1>
      </div>
      <Outlet />
      <div className="footer">
        <div className="wartburg-logo"></div>
        <h4>Peer Learning Lab 2022-23 ・ Math Lab</h4>
      </div>
    </div>
  );
}