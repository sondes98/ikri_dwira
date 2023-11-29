import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/HomeComponent";
import Announce from "./pages/announce/Announce";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/announceS" element={<Announce />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
