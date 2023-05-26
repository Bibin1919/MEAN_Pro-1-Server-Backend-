const mongoose = require('mongoose')

// Define a schema for the data
const shopSchema = new mongoose.Schema({
   
    shopname: { type: String, required: true },
  shopemail: { type: String, required: true },
  shopphone: { type: Number, required: true },
  shopaddress: { type: String, required: true },
  shopimageurl: { type: String, required: true }
});

// Define a model for the data
const shops = new mongoose.model("shops", shopSchema);

/* export model */
module.exports = shops

