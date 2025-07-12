const {Schema} =require("mongoose");

const AuctionSchema = Schema({
  title: String,
  settlement: String,
  payin: String,
  symbol: String,
  quantity: Number,
});

module.exports ={AuctionSchema}