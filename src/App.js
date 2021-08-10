import { Navbar } from "./components/Navbar";
import { NavProvider } from "./context/navContext";
import "./App.css";

function App() {
  return (
    <NavProvider>
      <div className="app">
        <Navbar />
      </div>
    </NavProvider>
  );
}

export default App;
