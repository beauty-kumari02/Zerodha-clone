import React, { useEffect, useState } from "react";
import axios from "axios";

const Auctions = () => {
  const [auctionsData, setAuctionsData] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get("http://localhost:3002/auctions");
        setAuctionsData(response.data);
      } catch (error) {
        console.error("Failed to fetch auctions:", error);
      }
    };

    fetchAuctions();
  }, []);

  return (
    <div className="auctions-container">
      <h2>Auctions</h2>
      <div className="auctions-list">
        {auctionsData.map((item, index) => (
          <div className="auction-card" key={index}>
            <div className="auction-title">{item.title}</div>
            <div className="auction-details">
              <div><span>Settlement:</span> {item.settlement}</div>
              <div><span>Payin:</span> {item.payin}</div>
              <div><span>Symbol:</span> {item.symbol}</div>
              <div><span>Qty:</span> {item.quantity}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auctions;
