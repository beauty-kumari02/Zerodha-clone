import React from "react";

function Brokerage() {
  return (
    <div className="container" style={{ marginTop: "3rem", padding: "0 2rem" }}>
      {/* Tabs */}
      <div className="row">
        <div
          style={{
            display: "flex",
            gap: "3rem",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#444",
              paddingBottom: "6px",
              borderBottom: "2px solid #1a73e8",
            }}
          >
            Equity
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#1a73e8",
              cursor: "pointer",
            }}
          >
            Currency
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#1a73e8",
              cursor: "pointer",
            }}
          >
            Commodity
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive mt-4">
        <table
          className="table"
          style={{
            backgroundColor: "rgb(250,250,250)",
            border: "1px solid #ccc",
            borderCollapse: "separate",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #ccc" }}>
              <th className="px-5 py-4"></th>
              <th className="px-5 py-4">Equity delivery</th>
              <th className="px-5 py-4">Equity intraday</th>
              <th className="px-5 py-4">F&O - Futures</th>
              <th className="px-5 py-4">F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-4">Brokerage</td>
              <td className="px-5 py-4">Zero Brokerage</td>
              <td className="px-5 py-4">
                0.03% or Rs. 20/executed <br /> order whichever is lower
              </td>
              <td className="px-5 py-4">
                0.03% or Rs. 20/executed <br /> order whichever is lower
              </td>
              <td className="px-5 py-4">Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td className="px-5 py-4">STT/CTT</td>
              <td className="px-5 py-4">0.1% on buy & sell</td>
              <td className="px-5 py-4">0.025% on the sell side</td>
              <td className="px-5 py-4">0.02% on the sell side</td>
              <td className="px-5 py-4">
                <ul className="mb-0 ps-3">
                  <li>0.125% of intrinsic value on exercised options</li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4">Transaction charges</td>
              <td className="px-5 py-4">
                NSE: 0.00297% <br /> BSE: 0.00375%
              </td>
              <td className="px-5 py-4">
                NSE: 0.00297% <br /> BSE: 0.00375%
              </td>
              <td className="px-5 py-4">
                NSE: 0.00173% <br /> BSE: 0
              </td>
              <td className="px-5 py-4">
                NSE: 0.03503% <br /> BSE: 0.0325% (on premium)
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4">GST</td>
              <td className="px-5 py-4">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="px-5 py-4">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="px-5 py-4">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="px-5 py-4">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4">SEBI charges</td>
              <td className="px-5 py-4">₹10 / crore</td>
              <td className="px-5 py-4">₹10 / crore</td>
              <td className="px-5 py-4">₹10 / crore</td>
              <td className="px-5 py-4">₹10 / crore</td>
            </tr>
            <tr>
              <td className="px-5 py-4">Stamp charges</td>
              <td className="px-5 py-4">
                0.015% or ₹1500 / crore on buy side
              </td>
              <td className="px-5 py-4">
                0.003% or ₹300 / crore on buy side
              </td>
              <td className="px-5 py-4">
                0.002% or ₹200 / crore on buy side
              </td>
              <td className="px-5 py-4">
                0.003% or ₹300 / crore on buy side
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Charges explained */}
<div className="mt-5">
  <h4 className="mb-4" style={{ fontWeight: 600 }}>Charges explained</h4>
  <div
    className="row"
    style={{
      lineHeight: "1.8rem",
      fontSize: "0.95rem",
      color: "#444",
    }}
  >
    {/* Left Column */}
    <div className="col-md-6">
      <div className="mb-4">
        <h6>Securities/Commodities transaction tax</h6>
        <p>
          Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
          <br />
          <br />
          When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
        </p>
      </div>

      <div className="mb-4">
        <h6>Transaction/Turnover Charges</h6>
        <p>
          Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
        </p>
        
          <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
          <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
          <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
          <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
        
      </div>

      <div className="mb-4">
        <h6>Call & trade</h6>
        <p>₹50/order for orders placed through dealer, including auto square off orders.</p>
      </div>

      <div className="mb-4">
        <h6>Stamp charges</h6>
        <p>
          Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
        </p>
      </div>

      <div className="mb-4">
        <h6>NRI brokerage charges</h6>
        <ul>
          <li>₹100/order for F&O.</li>
          <li>0.5% or ₹100/200 for equity depending on account type.</li>
          <li>₹500 + GST as AMC yearly charges.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h6>Account with debit balance</h6>
        <p>If the account is in debit, any order placed will be charged ₹40 per executed order instead of ₹20.</p>
      </div>

      <div className="mb-4">
        <h6>Charges for Investor Protection Fund Trust (IPFT) by NSE</h6>
        <ul style={{ paddingLeft: "1rem" }}>
          <li>Equity/Futures: ₹10 per crore + GST</li>
          <li>Options: ₹50 per crore + GST (premium value)</li>
          <li>Currency: ₹0.05 per lakh + GST for Futures, ₹2 per lakh + GST for Options</li>
        </ul>
      </div>

      <div className="mb-4">
        <h6>Margin Trading Facility (MTF)</h6>
      <ul>
          <li>MTF Interest: 0.04% per day on funded amount.</li>
          <li>MTF Brokerage: 0.3% or ₹20/executed order (whichever is lower).</li>
          <li>Pledge charge: ₹15 + GST per request per ISIN.</li>
       </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className="col-md-6">
      <div className="mb-4">
        <h6>GST</h6>
        <p>
          Tax levied by the government on services rendered. 18% of (brokerage + SEBI charges + transaction charges)
        </p>
      </div>

      <div className="mb-4">
        <h6>SEBI Charges</h6>
        <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
      </div>

      <div className="mb-4">
        <h6>DP (Depository participant) charges</h6>
        <p>
          ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
          <br />
          Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
          <br />
         Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
        </p>
      </div>

      <div className="mb-4">
        <h6>Pledging charges</h6>
        <p>₹30 + GST per pledge request per ISIN.</p>
      </div>

      <div className="mb-4">
        <h6>AMC (Account maintenance charges)</h6>
        <p>
          BSDA: ₹0 if holdings ₹4,00,000.<br />
          Non-BSDA: ₹300/year + 18% GST charged quarterly.
        </p>
      </div>

      <div className="mb-4">
  <h6>Corporate action order charges</h6>
  {/* <p>{`\u20B9 20 + GST for OFS / buyback / takeover / delisting orders through Console.`}</p> */}

</div>


      <div className="mb-4">
        <h6>Off-market transfer charges</h6>
        <p>₹25 per transaction.</p>
      </div>

      <div className="mb-4">
        <h6>Physical CMR request</h6>
        <p>First request free. Subsequent: ₹20 + ₹100 courier + 18% GST.</p>
      </div>

      <div className="mb-4">
        <h6>Payment gateway charges</h6>
        <p>₹9 + GST (UPI transfers excluded).</p>
      </div>

      <div className="mb-4">
        <h6>Delayed Payment Charges</h6>
        <p>Interest at 18% per year or 0.05% per day on debit balance.</p>
      </div>

      <div className="mb-4">
        <h6>Trading using 3-in-1 account with block functionality</h6>
        <ul>
          <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
          <li>Intraday Brokerage: 0.05% per executed order.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="mb-4">
  <h6>Disclaimer</h6>
  <p>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
</div>


      {/* Account Opening Charges */}
      <div className="mt-5">
        <h4 className="mb-3" style={{ fontWeight: 600 }}>Charges for account opening</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{color:"#696361"}}>Type of account</th>
              <th style={{color:"#696361"}}>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr><td >Online account</td> <td><span className="badge bg-success px-3 py-2" style={{ fontSize: "0.8rem" }}>FREE</span></td></tr>
            <tr><td>Offline account </td><td><span className="badge bg-success px-3 py-2" style={{ fontSize: "0.8rem" }}>FREE</span></td></tr>
            <tr><td>NRI account (offline only)</td><td>₹500</td></tr>
            <tr><td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td><td>₹500</td></tr>
          </tbody>
        </table>
      </div>

      {/* Optional value added services */}
      <div className="mt-5">
        <h4 className="mb-3" style={{ fontWeight: 600 }}>Charges for optional value added services</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{color:"#696361"}}>Service</th>
              <th style={{color:"#696361"}}>Billing Frequency</th>
              <th style={{color:"#696361"}}>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Tickertape</td><td>Monthly / Annual</td><td>Free / ₹249–2399</td></tr>
            <tr><td>Smallcase</td><td>Per transaction</td><td>₹100 (Buy & Invest More), ₹10 (SIP)</td></tr>
            <tr><td>Kite Connect</td><td>Monthly</td><td>₹500 (Connect), ₹500 (Historical)</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
