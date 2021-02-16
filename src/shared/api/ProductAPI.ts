/**
 * API Demo, use: FakeStoreAPI: https://fakestoreapi.com/  ( https://github.com/keikaavousi/fake-store-api )
 * PRODUCTS e.g:
 * - https://fakestoreapi.com/products
 * - https://fakestoreapi.com/products/1
 * - https://fakestoreapi.com/products/category/men%20clothing
 */

import axios from "axios";

const URL = "https://fakestoreapi.com";
const ProductAPI = axios.create({
  baseURL: URL,
});

export default ProductAPI;
