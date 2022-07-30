import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import History from "./screens/History";
import Help from "./screens/Help";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
