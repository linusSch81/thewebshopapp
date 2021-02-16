import "./FormQuantitly.scss";
import { useContext } from "react";
import { CartContext } from "../../shared/provider/CartProvider";

export const FormQuantitly = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  const removeHandler = () => {
    cartItems <= 0 ? setCartItems(0) : setCartItems(cartItems - 1);
  };

  return (
    <div className="form-quantity">
      <div className="form-quantity-inner">
        <button
          type="button"
          className="form-quantity-trigger form-quantity-remove"
          aria-label="Remove one item"
          onClick={() => removeHandler()}
        >
          <span className="form-quantity-trigger-icon">-</span>
        </button>
        <span className="form-quantity-input-wrap">
          <input
            type="number"
            min="0"
            pattern="[0-9]*"
            placeholder="Quantity"
            // id="inputnumber"
            className="form-quantity-input"
            value={cartItems}
            onChange={(event) => {
              setCartItems(parseInt(event.target.value, 10));
            }}
          />
        </span>
        <button
          type="button"
          className="form-quantity-trigger form-quantity-add"
          aria-label="Add one item"
          onClick={() => setCartItems(cartItems + 1)}
        >
          <span className="form-quantity-trigger-icon">+</span>
        </button>
      </div>
    </div>
  );
};
