import requests from './httpService';

const ProductServices = {
  getAllProducts() {
    return requests.get('/products');
  },

  getStockOutProducts() {
    return requests.get('/products/stock-out');
  },

  getProductById(id) {
    return requests.post(`/products/${id}`);
  },

  addProduct(body) {
    return requests.post('/products/add', body);
  },

  addAllProducts(body) {
    return requests.post('/products/all', body);
  },

  updateProduct(id, body) {
    return requests.put(`/products/${id}`, body);
  },

  updateStatus(id, body) {
    return requests.put(`/products/status/${id}`, body);
  },

  deleteProduct(id) {
    return requests.delete(`/products/${id}`);
  },
};

export default ProductServices;
