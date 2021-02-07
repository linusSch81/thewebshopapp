import "./shared/css/global.scss";
import { UserProvider } from "./shared/provider/UserProvider";
import { Routes } from "./routes/Routes";




function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
export default App;