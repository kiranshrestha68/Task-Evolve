import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./trade.css";
import actions from "../redux/action"
const Trade = ({heading}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getGeneralTrade());
   
  }, []);
  const moderns = useSelector((state) => state?.Modern?.generalDetails);
  const modernAudited = moderns.map((modern) => modern?.Audited);
  const pendingAudited = moderns.map((modern) => modern?.pending_audits);

  return (
    <div className="trade">
      <h3> {heading} </h3>
      <div className="trade__items">
        <div className="trade__subHead" >
          <span className="trade__audited"> AUDITED</span>
          <span className="trade__number"> {eval(modernAudited.join('+'))} </span>
        </div>
        <div className="trade__subHead trade_pending">
          <span className="trade__audited"> PENDING AUDITS</span>
          <span className="trade__number"> {eval(pendingAudited.join('+'))} </span>
        </div>
      </div>
    </div>
  );
};

export default Trade;
