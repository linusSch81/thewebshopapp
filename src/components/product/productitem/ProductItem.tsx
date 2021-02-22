import "./ProductItem.scss";
import { Image } from "../../image/Image";
import { FormQuantitly } from "../../formquantitly/FormQuantitly";

export const ProductItem = (props: {
  id: number;
  title: string;
  description: string;
  price?: number;
  image?: string;
}) => {
  const priceStr = `${props.price} kr`;
  const imageStr = props.image;
  return (
    <li key={"product" + props.id} className="product-item">
      <div className="product-item-image">
        {imageStr ? (
          <Image
            src={imageStr}
            alt=""
            componentClass="product-item-image-img"
          />
        ) : (
          "N/A"
        )}
      </div>
      <div className="product-item-text">
        <div className="product-item-info">
          <strong className="product-item-title">{props.title}</strong>
          <div className="product-item-desc"> {props.description}</div>
        </div>
        <div className="product-item-price">{priceStr}</div>
        <div className="product-item-quantity">
          <FormQuantitly productId={props.id} />
        </div>
      </div>
    </li>
  );
};
