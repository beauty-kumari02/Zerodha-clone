const {Schema} =require("mongoose");

const GovtSchema = new Schema({
   type: String,           // TBILL or GSEC
  instrument: String,     // e.g. "182 Day T-Bill"
  yield: String,          // e.g. "5.45%"
  endsOn: String,         // e.g. "Tue, 08 Jul 2025"
  orderValue: String, 
});

module.exports = {GovtSchema}