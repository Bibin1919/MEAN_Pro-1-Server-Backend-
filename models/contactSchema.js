const mongoose = require('mongoose')

// Define a schema for the data
const contactSchema = new mongoose.Schema({
   
    name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  company: { type: String, required: true },
  business: { type: String, required: true },
  message: { type: String, required: true }
});

// Define a model for the data
const contacts = new mongoose.model("contacts", contactSchema);

/* export model */
module.exports = contacts

