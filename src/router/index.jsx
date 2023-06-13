import { createBrowserRouter } from "react-router-dom";
import { pokedexLoader } from "./loaders/PokedexLoader";
import Home from "../pages/Home/Home";
import ProtectedRouter from "../components/ProtectedRoute/ProtectedRouter";
import Layout from "../components/Layout/Layout";
import Pokedex from "../pages/Pokedex/Pokedex";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";

// El router de tipo "Browser" siempre necesita que se configure correctamente la plataforma de despliegue (Netlify,Vercel,Servidor).
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokedex",
    element: (
      <ProtectedRouter>
        <Layout />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "",
        element: <Pokedex />,
        loader: pokedexLoader,
      },
      {
        path: ":pokemonId",
        element: <PokemonDetail />,
      },
    ],
  },
]);
