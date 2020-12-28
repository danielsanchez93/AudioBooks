import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AllAudioItems from "./components/AllAudioItems";
import Navbar from "./pages/Navbar";
import Search from "./pages/Search";

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
    </BrowserRouter>
  );
}

export default App;
