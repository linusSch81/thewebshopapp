import { ProductItem } from "../productitem/ProductItem";

import { useState, useEffect } from "react";
import ProductAPIService from "../../../shared/api/services/ProductAPIService";

export const ProductList = () => {
  //const [productCategory, setProductCategory] = useState<string>("jewelery");
  //const [productCategory, setProductCategory] = useState<string>("electronics");
  const [productCategory] = useState<string>("men%20clothing");
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
      //console.log(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI(productCategory);
  }, [productCategory]);

  const displayListItems = () => {
    const componentArray = [];
    if (!loading) {
      if (productsData) {
        for (const key of Object.keys(productsData)) {
          componentArray.push(
            <ProductItem
              id={productsData[key].id}
              title={productsData[key].title}
              price={productsData[key].price}
              description={productsData[key].description}
              image={productsData[key].image}
            />
          );
        }
      }
      return <>{componentArray}</>;
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
