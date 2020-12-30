import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import AllAudioItems from "./components/AllAudioItems";
// import Navbar from "./pages/Navbar";
// import Search from "./pages/Search";
// import Footer from "./pages/Footer";
import Layout from "./pages/Layout";
import CreateAudioItem from "./pages/CreateAudioItem";

function App() {
  require("dotenv").config();
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={AllAudioItems} />
          <Route exact path="/create" component={CreateAudioItem} />
          <Route exact path="/:id/edit" component={CreateAudioItem} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

// <BrowserRouter>
//       <div className="App">
//         <header className="App-header">
//           <Navbar />
//         </header>
//         <Search />
//         <AllAudioItems />
//       </div>
//       <Footer />
//     </BrowserRouter>
