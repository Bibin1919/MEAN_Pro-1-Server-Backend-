const Products = require('../models/productSchema')



exports.getallproducts = async (req, res) => {
  /* logic */
  try {
    const allProducts = await Products.find()
    res.status(200).json(allProducts)
  }
  catch (error) {
    res.status(401).json(error)
  }
}

/* remove item */
exports.removefromproduct = async (req,res) =>{
  /* get id from  */
  const {_id} = req.params

  try{
    console.log('jh1');
    const removeItem = await Products.deleteOne({_id})
    if(removeItem){
      console.log('jh');
      const allItems = await Products.find()
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