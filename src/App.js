import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Pokedex from "./components/Pokedex";
import PokedexInfo from "./components/PokedexInfo";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./index.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:name" element={<PokedexInfo />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
