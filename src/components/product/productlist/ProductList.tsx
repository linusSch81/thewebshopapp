import { ProductItem } from "../productitem/ProductItem";

import { useState, useEffect } from "react";
import ProductAPIService from "../../../shared/api/services/ProductAPIService";

export const ProductList = () => {
  //const [productCategory, setProductCategory] = useState<string>("jewelery");
  //const [productCategory, setProductCategory] = useState<string>("electronics");
  const [productCategory, ] = useState<string>(
    "men%20clothing"
  );
  const [productsData, setProductsData] = useState<any>();
  const [loading, setLoading] = useState<Boolean>(true);
  const fetchDataFromAPI = async (productCategory: string) => {
    try {
      setLoading(true);
      const response = await ProductAPIService.getDataProductsFromCategory(
        productCategory
      );
      setProductsData(response.data);
      setLoading(false);
      // console.log(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI(productCategory);
  }, [productCategory]);

  const displayListItems = () => {
    if (!loading) {
      if (productsData) {
        for (const key of Object.keys(productsData)) {
          console.info(
            "--- PRODUCT ITEM: " + key + " ---\n" +
            "* id = " + productsData[key].id + "\n" +
            "* title = " + productsData[key].title + "\n" +
            "* price = " + productsData[key].price+ "\n" +
            "* description = " + productsData[key].description+ "\n" +
            "* image = " + productsData[key].image
          );
        }
      }

      return (
        <ProductItem
          id={1}
          title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          price={109.95}
          description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
      );
    } else {
      return <strong>Loading data</strong>;
    }
  };

  return (
    <>
      <ul className="product-list">{displayListItems()}</ul>
    </>
  );
};
