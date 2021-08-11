import { Navbar } from "./components/Navbar";
import { NavProvider } from "./context/navContext";
import { MockSite } from "./mock/MockSite";

function App() {
  return (
    <NavProvider>
      <Navbar />
      <MockSite />
    </NavProvider>
  );
}

export default App;
