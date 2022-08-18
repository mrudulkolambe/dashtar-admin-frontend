import requests from './httpService';

const CouponServices = {
  addCoupon(body) {
    return requests.post('/coupon/add', body);
  },

  getAllCoupons() {
    return requests.get('/coupon');
  },
  getCouponById(id) {
    return requests.get(`/coupon/${id}`);
  },
  updateCoupon(id, body) {
    return requests.put(`/coupon/${id}`, body);
  },
  deleteCoupon(id) {
    return requests.delete(`/coupon/${id}`);
  },
};

export default CouponServices;
