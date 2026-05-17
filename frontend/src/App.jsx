import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Analyze from "./pages/analyze";
import Results from "./pages/results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;