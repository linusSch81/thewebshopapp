/**
 * API Demo, use: FakeStoreAPI: https://fakestoreapi.com/  ( https://github.com/keikaavousi/fake-store-api )
 * PRODUCTS e.g:
 * - https://fakestoreapi.com/products
 * - https://fakestoreapi.com/products/1
 * - https://fakestoreapi.com/products/category/men%20clothing
 */
import http from "../ProductAPI";

const getDataProductsFromCategory = (productCategory: string) => {
  return http.get(`/products/category/${productCategory}`);
};

/* export default {	*/
const logger = {
  getDataProductsFromCategory,
};
export default logger;
