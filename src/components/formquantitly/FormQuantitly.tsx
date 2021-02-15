import "./FormQuantitly.scss"
export const FormQuantitly = () => {
  return (
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
  );
};
