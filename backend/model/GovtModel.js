const {model} =require("mongoose");
const {GovtSchema} =require("../schemas/GovtSchema");

const GovtModel=new model("Govt",GovtSchema);

module.exports={GovtModel};