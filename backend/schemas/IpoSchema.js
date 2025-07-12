const { Schema } = require("mongoose");

const IpoSchema = new Schema({
  instrument: String,
  company: String,
  date: String,
  price: String,
  amount: String,
  qty: String,
  status: String,
});

module.exports = { IpoSchema }; 
