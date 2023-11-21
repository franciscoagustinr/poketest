import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Data } from "./COMPONENTS/Data";
import background from "../src/assets/bg.jpg";
import { PokemonInfo } from "./COMPONENTS/PokemonInfo";
import { Error } from "./COMPONENTS/Error";
import { Footer } from "./COMPONENTS/Footer";
import { Header } from "./COMPONENTS/Header";

function App() {
  return (
    <div
      className={` min-h-screen font-Poppins `}
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "repeat",
      }}
    >
      <Link to={"/"}>
        <Header />
      </Link>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/inicio" element={<Data />} />
        <Route path="/pokemons/:pokeId" element={<PokemonInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
