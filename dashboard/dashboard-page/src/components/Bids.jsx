import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import IPO from "./IPO";
import GovtSecurities from "./GovtSecurities";
import Auctions from "./Auctions";

const Bids = () => {
  return (
    <div className="bids-container">
      <div className="bids-tabs">
        <NavLink
          to="/bids/ipo"
          className={({ isActive }) =>
            isActive ? "bids-tab active" : "bids-tab"
          }
        >
          IPO
        </NavLink>
        <NavLink
          to="/bids/govt"
          className={({ isActive }) =>
            isActive ? "bids-tab active" : "bids-tab"
          }
        >
          Govt. securities
        </NavLink>
        <NavLink
          to="/bids/auctions"
          className={({ isActive }) =>
            isActive ? "bids-tab active" : "bids-tab"
          }
        >
          Auctions
                                                                                                                                                                                                                         </NavLink>
      </div>

      <div className="bids-content">
        <Routes>
          <Route index element={<Navigate to="ipo" />} />
          <Route path="ipo" element={<IPO />} />
          <Route path="govt" element={<GovtSecurities />} />
          <Route path="auctions" element={<Auctions />} />
        </Routes>
      </div>
    </div>
  );
};

export default Bids;
