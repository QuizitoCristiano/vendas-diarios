import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Logo } from "./componente/logo";

import "./styles/styles.css";
import { Login } from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Logo />

      <div className="contariner">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
