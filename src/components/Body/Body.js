import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Body = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
