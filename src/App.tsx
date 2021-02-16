import "./shared/css/global.scss";
import { UserProvider } from "./shared/provider/UserProvider";
import { CartProvider } from "./shared/provider/CartProvider";
import { Routes } from "./routes/Routes";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </UserProvider>
  );
}
export default App;
