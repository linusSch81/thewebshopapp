/**
 * API Demo, use: FakeStoreAPI: https://fakestoreapi.com/  ( https://github.com/keikaavousi/fake-store-api )
 * CART e.g:
 * - https://fakestoreapi.com/carts
 * - https://fakestoreapi.com/carts/5
 * - https://fakestoreapi.com/carts/user/2
 */

export const CartView = () => {
  return (
    <div className="view">
      <p> * list current state shopping cart items * </p>
      <p>
        COMPONENT CartItem
        <ul>
          <li>add / remove quantity</li>
        </ul>
      </p>
    </div>
  );
};
