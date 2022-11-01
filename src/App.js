import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Logo } from "./componente/logo";

import "./styles/styles.css";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastros";

function App() {
  return (
    <BrowserRouter>
      <Logo />

      <div className="contariner">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Cadastro />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
