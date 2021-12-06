import React from "react";
import "./sidebar.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Sidebar = () => {
  const Menus = ["Dashboard", "Configuration", "Modern Trade", "General Trade"];
  return (
    <div className="Sidebar__main">
      <div className="Sidebar__backBottom">
        <div className="Sidebar__backArrow">
          <ArrowBackIcon />{" "}
        </div>
        <span> Back </span>
      </div>
      <div className="Sidebar__NepalAudit">Nepal POSM Audit</div>
      <div className="Sidebar__Menu">
        {Menus.map((m) => {
          return <div className="Sidebar__MenuItems"> {m} </div>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;


