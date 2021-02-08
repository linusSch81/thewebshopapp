import { Header } from "../header/Header";

import { Navigation } from "../navigation/Navigation";
import { CartTrigger } from "../shop/carttrigger/CartTrigger";

export const DomStart = () => {
  return (
    <>
      <CartTrigger count="2" />
      <Header>
        <Navigation />
      </Header>
    </>
  );
};
