const contacts = require('../models/contactSchema')



exports.getallcontacts = async (req, res) => {
  /* logic */
  try {
    const allContacts = await contacts.find()
    res.status(200).json(allContacts)
  }
  catch (error) {
    res.status(401).json(error)
  }
}