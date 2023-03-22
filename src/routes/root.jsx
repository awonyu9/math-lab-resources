import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="Root">
      <div className="header">
        <h1>Math Lab Resources</h1>
      </div>
      <Outlet />
    </div>
  );
}