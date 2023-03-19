import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/index";

export default function App() {
  // Lista dos filmes
  const [dataFilms, setDataFilms] = useState([]);

  // URL base das imagens
  const image_url = "https://starwars-visualguide.com/assets/img/films/";

  // Estado do loading...
  const [loading, setLoading] = useState(false);

  // Função que realiza o FECTH
  const fecthData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setDataFilms(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const films = "https://swapi.dev/api/films";
    fecthData(films);
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/"
            element={
              <Home loading={loading} data={dataFilms} imageURL={image_url} />
            }
          />
        </Switch>
      </Router>
    </>
  );
}
