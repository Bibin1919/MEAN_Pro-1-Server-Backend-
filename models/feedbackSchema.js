const mongoose = require('mongoose')

// Define a schema for the data
const feedbackSchema = new mongoose.Schema({
   
    name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  message: { type: String, required: true }
});

// Define a model for the data
const feedbacks = new mongoose.model("feedbacks", feedbackSchema);

/* export model */
module.exports = feedbacks

