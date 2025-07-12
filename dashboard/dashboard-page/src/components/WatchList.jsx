import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { StackedLineChart } from "@mui/icons-material"; 
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';



import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
   const [stocks, setStocks] = useState(watchlist); // initial data from ../data/data

  const handleDelete = (uid) => {
    const updated = stocks.filter((s) => s.name !== uid);
    setStocks(updated);
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {stocks.map((stock, index) => {
          return <WatchListItem stock={stock} key={index}  onDelete={handleDelete}/>;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock,onDelete }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} onDelete={onDelete} />}
    </li>
  );
};

const WatchListActions = ({ uid,onDelete }) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext); // ✅ added openSellWindow

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={() => openBuyWindow(uid)}>
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={() => openSellWindow(uid)}>
            Sell
          </button>
        </Tooltip>

        <Tooltip
          title="Market Depth(D)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            < FormatAlignCenterIcon className="icon" />
          </button>
        </Tooltip>
        <Tooltip
          title="Chart(C)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <TrendingUpIcon className="icon" />
          </button>
        </Tooltip>
        <Tooltip
          title="Delete(del)"
          placement="top"
          arrowTransitionComponent={Grow}
        >
          <button className="action" onClick={() => onDelete(uid)}>
               <DeleteOutline className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};