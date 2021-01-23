import { Routes } from "./routes/Routes";
import { Desktopnavigation } from "./components/navigation/desktopnavigation/Desktopnavigation";
import "./shared/css/global.css";
          
function App() {
  return (
    <Routes>
      <>
        <Desktopnavigation />
      </>
    </Routes>
  );
}
export default App;