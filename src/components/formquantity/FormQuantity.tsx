import "./FormQuantity.scss";
import { useState } from "react";
//import { useContext} from "react";
//import { CartContext } from "../../shared/provider/CartProvider";

export const FormQuantity = (props:{productId:number}) => {
  //const [cartItems, setCartItems] = useContext(CartContext);
  const [quantityCount,setQuantityCount] = useState<number>(0);
/* console.log(cartItems) */
// console.log(props.productId)
// console.log(cartItems.products)

/* check if @productId is in @$cartItems */

/* setQuantityCount if in cartItem */

/* Input onchange update cartItem */

  const removeHandler = () => {
    quantityCount <= 0 ?setQuantityCount(0) :setQuantityCount(quantityCount - 1);
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
            value={quantityCount}
            onChange={(event) => {
             setQuantityCount(parseInt(event.target.value, 10));
            }}
          />
        </span>
        <button
          type="button"
          className="form-quantity-trigger form-quantity-add"
          aria-label="Add one item"
          onClick={() =>setQuantityCount(quantityCount + 1)}
        >
          <span className="form-quantity-trigger-icon">+</span>
        </button>
      </div>
    </div>
  );
};
