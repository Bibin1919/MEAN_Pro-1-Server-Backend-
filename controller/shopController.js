const Shops = require('../models/shopSchema')



exports.getallshops = async (req, res) => {
  /* logic */
  try {
    const allshops = await Shops.find()
    res.status(200).json(allshops)
  }
  catch (error) {
    res.status(401).json(error)
  }
}

/* remove item */
exports.removefromshop = async (req,res) =>{
  /* get id from  */
  const {_id} = req.params

  try{
    console.log('jh1');
    const removeItem = await Shops.deleteOne({_id})
    if(removeItem){
      console.log('jh');
      const allItems = await Shops.find()
      res.status(200).json(allItems)
    }
    else{
      res.status(404).json("Item Not present In Product")
    }
  }
  catch(error){
    res.status(401).json(error)
  }
}