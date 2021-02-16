import "./CartSideBar.scss";
import { CartSideBarItem } from "../cartsidebaritem/CartSideBarItem";
export const CartSideBar = (props: {
  openCart?: boolean;
  setOpenCart: Function;
}) => {
  return (
    <>
      <div
        className={
          props.openCart
            ? "cart-sidebar cart-sidebar-open"
            : "cart-sidebar cart-sidebar-closed"
        }
      >
        <div className="cart-sidebar-header">
          <strong className="cart-sidebar-title">Shopping cart</strong>
          <button
            className="cart-close-trigger button"
            onClick={() => props.setOpenCart()}
          >
            Continue shopping
          </button>
        </div>
        <div className="cart-sidebar-body">
          <ul className="cart-sidebar-list">
            <CartSideBarItem />
          </ul>
        </div>
        <div className="cart-sidebar-footer">
          <div className="cart-sidebar-sum">
            <ul className="cart-sidebar-sum-list">
              <li className="cart-sidebar-sum-item">
                <strong className="cart-sidebar-sum-key">
                  sum of products
                </strong>
                <span className="cart-sidebar-sum-value">7 000 kr</span>
              </li>
              <li className="cart-sidebar-sum-item">
                <strong className="cart-sidebar-sum-key">Shipping</strong>
                <span className="cart-sidebar-sum-value">0</span>
              </li>
              <li className="cart-sidebar-sum-item cart-sidebar-total">
                <strong className="cart-sidebar-sum-key">Total</strong>
                <span className="cart-sidebar-sum-value">8 000 kr</span>
              </li>
            </ul>
          </div>

          <div className="cart-sidebar-nav">
            <button className="cart-sidebar-checkout-trigger button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
