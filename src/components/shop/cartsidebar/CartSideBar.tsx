import { useState } from "react";
import "./CartSideBar.scss";
export const CartSideBar = (props: { openCart?: boolean; }) => {
  //const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <>
      <form
        className={
          props.openCart
            ? "cart-sidebar cart-sidebar-open"
            : "cart-sidebar cart-sidebar-closed"
        }
      >
        <div className="cart-sidebar-header">
          <strong className="cart-sidebar-title">Shopping cart</strong>
          <button className="cart-close-trigger">Continue shopping</button>
        </div>
        <div className="cart-sidebar-body">
          <ul className="cart-sidebar-list">
            <li className="cart-sidebar-item">
              <div className="cart-sidebar-item-image">
                <img
                  src="https://picsum.photos/400"
                  alt=""
                  className="cart-sidebar-item-image-img"
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
                  <div className="form-quantity">
                    <div className="form-quantity-inner">
                      <button
                        type="button"
                        className="form-quantity-trigger form-quantity-remove"
                        aria-label="Remove one item"
                      >
                        <span className="form-quantity-trigger-icon">-</span>
                      </button>
                      <span className="form-quantity-input-wrap">
                        <input
                          type="number"
                          min="0"
                          pattern="[0-9]*"
                          placeholder="Quantity"
                          id="inputnumber"
                          className="form-quantity-input"
                        />
                      </span>
                      <button
                        type="button"
                        className="form-quantity-trigger form-quantity-add"
                        aria-label="Add one item"
                      >
                        <span className="form-quantity-trigger-icon">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
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
      </form>
    </>
  );
};
