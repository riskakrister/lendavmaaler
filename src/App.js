import Navbar from "./components/Navbar";
import LandingDiv from "./pages/LandingDiv";
import AboutDiv from "./pages/About";

import "./App.module.css";

function App() {
  return (
    <div>
      <Navbar />
      <LandingDiv />
      <AboutDiv />
    </div>
  );
}

export default App;
