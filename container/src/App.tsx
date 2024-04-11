import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Mf1 from "micro_frontend_1/Mf1";
import Mf2 from "micro_frontend_2/Mf2";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route
          path="/"
          element={<h1>Welcome to Daphne's micro front-end</h1>}
        />
        <Route path="/frontend1" element={<Mf1 />} />
        <Route path="/frontend2" element={<Mf2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
