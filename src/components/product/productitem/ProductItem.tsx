
import "./ProductItem.scss";
import { Image } from "../../image/Image";
import { FormQuantitly } from "../../formquantitly/FormQuantitly";
export const ProductItem = () => {
  return (
    <li className="product-item">
      <div className="product-item-image">
       {/*  <Image
          src="https://picsum.photos/400"
          alt=""
          componentClass="product-item-image-img"
        /> */}
      </div>
      <div className="product-item-text">
        <div className="product-item-info">
          <strong
            className="product-item-title"
            
          >
            Title
          </strong>
          <div className="product-item-desc">Blue</div>
        </div>
        <div className="product-item-price">2 000 kr</div>
        <div className="product-item-quantity">
          <FormQuantitly />
        </div>
      </div>
    </li>
  );
};
