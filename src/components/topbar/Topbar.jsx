import React from "react";
import "./topbar.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EventIcon from "@mui/icons-material/Event";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <span className="topbar__NepalAudit"> Nepal POSM Audit</span>

        <div className="topbar__rightArrow">
          {" "}
          <KeyboardArrowRightIcon  fontSize="small"/>{" "}
        </div>
        <span className="topbar__dashboard"> Dashboard</span>

        <div className="topbar__rightArrow">
          {" "}
          <KeyboardArrowRightIcon fontSize="small"/>{" "}
        </div>
      </div>
      <div className="topbar__right">
        {" "}
        <div className="topbar__MTD-calender">
          {" "}
          <span> MTD </span>{" "}
          <div className="topbar__calender">
            {" "}
            <EventIcon />
          </div>
        </div>{" "}
        <div className="topbar__letterA"> 
        <span>A</span>
         </div>
      </div>
    </div>
  );
};

export default Topbar;
