import React from "react";
import DeviceTrade from "../DevicesTrade/DeviceTrade";
import ModernTrade from "../DevicesTrade/Modern";

import Topbar from "../topbar/Topbar";
import Trade from "../Trade/Trade";
import Modern from "../Trade/Modern";

import "./mainpage.css";

const Mainpage = () => {
  return (
    <div className="mainpage">
      <Topbar />
      <div className="mainpage__trade">
        {" "}
        <Trade heading="Modern Trade" /> <Modern heading="General Trade" />{" "}
      </div>
      <div className="mainpage__deviceTrade">
        <DeviceTrade />
        <ModernTrade />
      </div>
    </div>
  );
};

export default Mainpage;
