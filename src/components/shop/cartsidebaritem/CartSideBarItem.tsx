import "./CartSideBarItem.scss";
import { Image } from "../../image/Image";
import { FormQuantitly } from "../../formquantitly/FormQuantitly";
export const CartSideBarItem = () => {
  return (
    <li className="cart-sidebar-item">
      <div className="cart-sidebar-item-image">
        <Image
          src="https://picsum.photos/400"
          alt=""
          componentClass="cart-sidebar-item-image-img"
        />
      </div>
      <div className="cart-sidebar-item-text">
        <div className="cart-sidebar-item-info">
          <label
            className="cart-sidebar-item-title"
            // for="inputnumber"
          >
            Title
          </label>
          <div className="cart-sidebar-item-desc">Blue</div>
        </div>
        <div className="cart-sidebar-item-price">2 000 kr</div>
        <div className="cart-sidebar-item-quantity">
          <FormQuantitly productId={0}  />
        </div>
      </div>
    </li>
  );
};
