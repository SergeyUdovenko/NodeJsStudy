const ProductModel = require('../models').ProductModel;
const products = require('../data/products');

module.exports.initProduct = (req, res) => {

	ProductModel.create(products, (error, data) =>{
    if (error) console.log(error);
    res.json(data)
  })
};
module.exports.getAllProducts = (req, res) => {

	ProductModel.find((error, data) => {
	  if (error) {
		console.log('Error in `getAllProducts` controller');
		return;
	  }
  
	  res.json(data)
	})
  };
module.exports.deleteProduct = (req, res) => {
  const id = req.params.id;

  ProductModel.findOneAndRemove({_id: id}).exec((error, data)=>{
    if (error) {
      res.status(500).end('Error: fail to find product with id: ', id)
    }
    res.end(`Success: Product with id: ${id} removed`)
  })
};
