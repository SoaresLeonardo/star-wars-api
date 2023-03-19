import { useEffect, useState } from "react";
import Home from "./pages/Home/index";

export default function App() {
  // Lista dos filmes
  const [dataFilms, setDataFilms] = useState([]);
  // Lista dos planetas
  const [dataPlanets, setDataPlanets] = useState([]);

  // URL base das imagens films, planetas,
  const imageURL1 = "https://starwars-visualguide.com/assets/img/films/";
  const imageURL2 = "https://starwars-visualguide.com/assets/img/planets/";

  // Estado do loading...
  const [loading, setLoading] = useState(false);

  // Função que realiza o FECTH
  const fecthData = async (url) => {
    setLoading(true);
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        return data;
      });
  };

  useEffect(() => {
    // Dados dos filmes
    fecthData("https://swapi.dev/api/films").then((data) => {
      setDataFilms(data.results);
    });
    // Dados dos planetas
    fecthData("https://swapi.dev/api/planets").then((data) => {
      setDataPlanets(data.results);
    });
  }, []);

  return (
    <Home
      loading={loading}
      dataFilms={dataFilms}
      imageFilmsURL={imageURL1}
      imageURL2={imageURL2}
      dataPlanets={dataPlanets.slice(1)}
    />
  );
}
