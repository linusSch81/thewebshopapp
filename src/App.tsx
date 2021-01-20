import { Routes } from "./routes/Routes";
import { Greeting } from "./components/greeting/Greeting";
import { Desktopnavigation } from "./components/navigation/desktopnavigation/Desktopnavigation";

function App() {
  return (
    <Routes>
      <>
        <Greeting fname="John" lname="Doe" />
        {/* <Greeting fname={"John"} lname={"Doe"} /> */}
        <Desktopnavigation />
      </>
    </Routes>
  );
}
export default App;