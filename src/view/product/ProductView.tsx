/** 
 * API Demo, use: FakeStoreAPI: https://fakestoreapi.com/  ( https://github.com/keikaavousi/fake-store-api )
 * PRODUCTS e.g: 
 * - https://fakestoreapi.com/products
 * - https://fakestoreapi.com/products/1
 * - https://fakestoreapi.com/products/category/men%20clothing
 */

import {ProductList} from "../../components/product/productlist/ProductList"
export const ProductView = () => {
	return (
		<div className="view">
			<h1>Product</h1>
			{/* <p> * Show the actual product item * </p> */}
			<ProductList />
			
		
		
		
		</div>
	)
}
