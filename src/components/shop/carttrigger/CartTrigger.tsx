export const CartTrigger = (props: { count?: any;setOpenCart: Function;}) => {
  const countStr: string = props.count >= 1 ? `(${props.count})` : "";
  const countLabel: string = countStr
    ? `${props.count} ${props.count >= 2 ? "items" : "item"} in shopping cart`
    : "No items in shopping cart";
  return (
    <>
      <button
        className="cart-trigger button"
        title={countLabel}
        aria-label={countLabel}
        onClick={() => props.setOpenCart(true)}
      >
        <span className="cart-trigger-icon">Cart </span>
        <span className="cart-trigger-count">{countStr}</span>
      </button>
    </>
  );
};