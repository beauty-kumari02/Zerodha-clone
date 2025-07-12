require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { IpoModel } = require("./model/IpoModel");
const { GovtModel } = require("./model/GovtModel");
const { AuctionModel } = require("./model/AuctionModel");

const app = express();
app.use(cors());
app.use(bodyParser.json());


// ✅ Dummy IPO data
app.get("/addIpo", async (req, res) => {
  const dummyIPOs = [
    // {
    //   instrument: "TRAVELFOOD",
    //   company: "Travel Food Services",
    //   date: "7ᵗʰ — 9ᵗʰ Jul",
    //   price: "1045 - 1100",
    //   amount: "14300",
    //   qty: "13",
    //   status: "Apply",
    // },
    // {
    //   instrument: "SMARTEN",
    //   company: "Smarten Power Systems",
    //   date: "7ᵗʰ — 9ᵗʰ Jul",
    //   price: "100",
    //   amount: "240000",
    //   qty: "2400",
    //   status: "Apply",
    // },
    // {
    //   instrument: "CHEMKART",
    //   company: "Chemkart India",
    //   date: "7ᵗʰ — 9ᵗʰ Jul",
    //   price: "236 - 248",
    //   amount: "297600",
    //   qty: "1200",
    //   status: "Apply",
    // },
    
  // {
  //   instrument: "GLEN",
  //   company: "Glen Industries",
  //   date: "8ᵗʰ — 10ᵗʰ Jul",
  //   price: "92 - 97",
  //   amount: "232800",
  //   qty: "2400",
  //   status: "Apply",
  // },
  // {
  //   instrument: "SMARTWORKS",
  //   company: "Smartworks Coworking Spaces",
  //   date: "10ᵗʰ — 14ᵗʰ Jul",
  //   price: "387 - 407",
  //   amount: "14652",
  //   qty: "36",
  //   status: "Pre-apply",
  // },
  // {
  //   instrument: "APL",
  //   company: "Asston Pharmaceuticals",
  //   date: "9ᵗʰ — 11ᵗʰ Jul",
  //   price: "115 - 123",
  //   amount: "246000",
  //   qty: "2000",
  //   status: "Upcoming",
  // },
  // {
  //   instrument: "ELLEN",
  //   company: "Ellenbarrie Industrial Gases",
  //   date: "24ᵗʰ — 26ᵗʰ Jun",
  //   price: "380 - 400",
  //   amount: "14800",
  //   qty: "37",
  //   status: "Closed",
  // },
  // {
  //   instrument: "KALPATARU",
  //   company: "Kalpataru",
  //   date: "24ᵗʰ — 26ᵗʰ Jun",
  //   price: "387 - 414",
  //   amount: "14904",
  //   qty: "36",
  //   status: "Closed",
  // },
  // {
  //   instrument: "GLOBECIVIL",
  //   company: "Globecivil",
  //   date: "24ᵗʰ — 26ᵗʰ Jun",
  //   price: "67 - 71",
  //   amount: "14981",
  //   qty: "2100",
  //   status: "Closed",
  // },

  ];

  await IpoModel.insertMany(dummyIPOs);
  res.send("Dummy IPOs added");
});


// ✅ Dummy Govt Securities
app.get("/addGovtSecurities", async (req, res) => {
  const dummyGovt = [
     {
      instrument: "182 Day T-Bill",
      type: "TBILL",
      yield: "5.45%",
      endsOn: "Tue, 08 Jul 2025",
      status: "Place bid",
    },
    {
      instrument: "7.09% GS 2074",
      type: "GSEC",
      yield: "7.11%",
      endsOn: "Thu, 10 Jul 2025",
      status: "Place bid",
    },
    {
      instrument: "NEW GS 2032",
      type: "GSEC",
      yield: "6.30%",
      endsOn: "Thu, 10 Jul 2025",
      status: "Place bid",
    },
  ];

  await GovtModel.insertMany(dummyGovt);
  res.send("Dummy Govt Securities added");
});


// ✅ Dummy Auctions
app.get("/addAuctions", async (req, res) => {
  const dummyAuctions = [
    {
      title: "NSE / T+1 / CM",
      settlement: "2024-07-09",
      payin: "Before 10:00 AM",
      symbol: "XYZ",
      quantity: 100,
    },
    {
      title: "BSE / T+1 / CM",
      settlement: "2024-07-10",
      payin: "Before 11:00 AM",
      symbol: "ABC",
      quantity: 50,
    },
    {
      title: "NSE / T+2 / F&O",
      settlement: "2024-07-11",
      payin: "Before 9:30 AM",
      symbol: "DEF",
      quantity: 75,
    },
  ];

  await AuctionModel.insertMany(dummyAuctions);
  res.send("Dummy Auctions added");
});


// ✅ Fetch IPOs
app.get("/ipo", async (req, res) => {
  try {
    const ipos = await IpoModel.find();
    res.json(ipos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch IPOs" });
  }
});


// ✅ Fetch Govt Securities
app.get("/govt", async (req, res) => {
  try {
    const securities = await GovtModel.find();
    res.json(securities);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Govt Securities" });
  }
});


// ✅ Fetch Auctions
app.get("/auctions", async (req, res) => {
  try {
    const auctions = await AuctionModel.find();
    res.json(auctions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Auctions" });
  }
});


// ✅ Existing holdings, orders, positions
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allOrders", async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const quantity = parseInt(qty);
  const priceVal = parseFloat(price);

  const newOrder = new OrdersModel({
    name,
    qty: quantity,
    price: priceVal,
    mode,
    timestamp: new Date()
  });
  await newOrder.save();

  const existingHolding = await HoldingsModel.findOne({ name });

  if (mode === "BUY") {
    if (existingHolding) {
      const totalQty = existingHolding.qty + quantity;
      const totalCost = existingHolding.avg * existingHolding.qty + priceVal * quantity;
      existingHolding.qty = totalQty;
      existingHolding.avg = totalCost / totalQty;
      existingHolding.price = priceVal;
      await existingHolding.save();
    } else {
      const newHolding = new HoldingsModel({
        name,
        qty: quantity,
        avg: priceVal,
        price: priceVal,
        net: "+0.00%",
        day: "+0.00%",
      });
      await newHolding.save();
    }
  } else if (mode === "SELL") {
    if (existingHolding) {
      existingHolding.qty -= quantity;
      if (existingHolding.qty <= 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await existingHolding.save();
      }
    }
  }

  res.status(200).json({ message: "Order processed and holdings updated" });
});

const PORT=process.env.PORT || 3002;
const url=process.env.MONGO_URL ||3002;



app.listen(port,()=>{
    console.log("app started");
    mongoose.connect(url);
    console.log("DB started")
});