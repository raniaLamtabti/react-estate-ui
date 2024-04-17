import Navbar from "../components/navBar";
import { Outlet } from "react-router-dom";

function userLayout() {
  return (
    <div className="layout">
      <div className="navbar">
        test
        <Navbar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

export default userLayout;