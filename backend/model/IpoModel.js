const mongoose = require("mongoose");
const { IpoSchema } = require("../schemas/IpoSchema"); 

const IpoModel = mongoose.model("IPO", IpoSchema); 

module.exports = { IpoModel };
