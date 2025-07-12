const {model} =require("mongoose");
const {AuctionSchema} =require("../schemas/AuctionSchema");

const AuctionModel=new model("auction",AuctionSchema);

module.exports={AuctionModel};