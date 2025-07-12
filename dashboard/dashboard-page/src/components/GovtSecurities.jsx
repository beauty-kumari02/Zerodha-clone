import React, { useEffect, useState } from "react";
import axios from "axios";


const GovtSecurities = () => {
  const [securities, setSecurities] = useState([]);

  useEffect(() => {
    const fetchSecurities = async () => {
      try {
        const response = await axios.get("http://localhost:3002/govt");
        setSecurities(response.data);
      } catch (error) {
        console.error("Error fetching securities:", error);
      }
    };

    fetchSecurities();
  }, []);

  return (
    <div className="govt-sec-container">
      <div className="govt-sec-title">
        Govt. securities ({securities.length})
      </div>

      <div className="govt-sec-table">
        <div className="govt-sec-row header">
          <span>Type</span>
          <span>Instrument</span>
          <span>Yield*</span>
          <span>Ends on</span>
          <span>Order value</span>
        </div>

        {securities.map((sec, index) => (
          <div key={index} className="govt-sec-row">
            <span>
              <span
                className={`tag ${
                  sec.type === "TBILL" ? "tag-tbill" : "tag-gsec"
                }`}
              >
                {sec.type}
              </span>
            </span>
            <span>{sec.instrument}</span>
            <span>{sec.yield}</span>
            <span>{sec.endsOn}</span>
            <span>
              <button className="place-bid-btn">Place bid</button>
            </span>
          </div>
        ))}
      </div>

      <p className="yield-note">
        * Learn more about <span className="link">yields</span>.
      </p>
    </div>
  );
};

export default GovtSecurities;
