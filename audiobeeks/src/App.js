import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AllAudioItems from "./components/AllAudioItems";
import Navbar from "./pages/Navbar";
import Search from "./pages/Search";
import Footer from "./pages/Footer";

function App() {
  require("dotenv").config();
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Search />
        <AllAudioItems />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
