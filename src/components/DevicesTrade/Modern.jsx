import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./devicetrade.css";
import actions from "../redux/action";

const DeviceTrade = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getModern());
  }, []);
  const moderns = useSelector((state) => state?.Modern?.generalDetails);
  const modernAudited = moderns.map((modern) => modern?.Audited);
  const pendingAudited = moderns.map((modern) => modern?.pending_audits);

  return (
    <div className="deviceTrade__main">
      <div className="deviceTrade__type">Devices - General Trade </div>
      <div className="deviceTrade__table">
        {" "}
        <table className="table">
          <thead className="tablecolor">
            <tr>
              <th scope="col">Device</th>
              <th scope="col">Total</th>
              <th scope="col">Audited</th>
              <th scope="col">Pending Audits</th>
            </tr>
          </thead>
          <tbody>
            {moderns.map((modern) => (
              <tr>
                <td>{modern.Device}</td>
                <td className="text-primary">{modern.Total}</td>
                <td className="text-primary">{modern.Audited}</td>
                <td className="text-primary">{modern.pending_audits}</td>
              </tr>
            ))}

            <tr>
              <td className="font-weight-bold" colspan="2">
                {" "}
                Total
              </td>
              <td className="text-primary">{eval(modernAudited.join("+"))}</td>
              <td className="text-primary">{eval(pendingAudited.join("+"))}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeviceTrade;
