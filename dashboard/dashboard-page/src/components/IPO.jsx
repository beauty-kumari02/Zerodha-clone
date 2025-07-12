import React, { useEffect, useState } from "react";
import axios from "axios";


const IPO = () => {
  const [ipoData, setIpoData] = useState([]);

  useEffect(() => {
    const fetchIPOs = async () => {
      try {
        const response = await axios.get("http://localhost:3002/ipo");
        setIpoData(response.data);
      } catch (error) {
        console.error("Failed to fetch IPOs:", error);
      }
    };

    fetchIPOs();
  }, []);

  return (
    <div className="ipo-container">
      <div className="ipo-header">
        <h2>IPOs ({ipoData.length})</h2>
        <input type="text" className="ipo-search" placeholder="Search" />
      </div>

      <table className="ipo-table">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Date</th>
            <th>Price (₹)</th>
            <th>Min. amount (₹)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ipoData.map((ipo, index) => (
            <tr key={index} className="ipo-row">
              <td>
                <div className="instrument-name">{ipo.instrument}</div>
                <div className="company-name">{ipo.company}</div>
              </td>
              <td>{ipo.date}</td>
              <td>{ipo.price}</td>
              <td>
                {ipo.amount}
                <div className="qty-text">{ipo.qty} Qty.</div>
              </td>
              <td>
                <button className={`ipo-btn ${ipo.status.toLowerCase()}`}>
                  {ipo.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPO;
