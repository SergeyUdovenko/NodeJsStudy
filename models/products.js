const data = require('../data/products');
const products = data.products || [];

const getAllProducts = new Promise(resolve => {
  resolve(products);
});

const getProduct = (id) => new Promise(resolve => {
  const product = products.find(product => product.id === +id) || null;
  resolve(product)
});

const getReviews = (id) => new Promise((resolve, reject) => {
  const product = products.find(product => product.id === +id);
  try {
    const reviews = product.reviews || [];
    resolve(reviews)
  } catch (error) {
    reject(error)
  }
});

const addProduct = (product) => new Promise(resolve => {
  products.push(product);
  resolve(product)
});

module.exports = {
  getAllProducts, getProduct, getReviews, addProduct
};
