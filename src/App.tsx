import { Routes } from "./routes/Routes";
// import { DesktopNavigation } from "./components/navigation/desktopnavigation/DesktopNavigation";
import { Navigation } from "./components/navigation/Navigation";
import "./shared/css/global.css";
import { UserProvider } from "./shared/provider/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes>
        {/* <DesktopNavigation /> */}
        <Navigation />
      </Routes>
    </UserProvider>
  );
}
export default App;