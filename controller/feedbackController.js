const feedbacks = require('../models/feedbackSchema')



exports.getallfeedbacks = async (req, res) => {
  /* logic */
  try {
    const allfeedbacks = await feedbacks.find()
    res.status(200).json(allfeedbacks)
  }
  catch (error) {
    res.status(401).json(error)
  }
}