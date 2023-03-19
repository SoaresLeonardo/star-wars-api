import { useEffect, useState } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Films from "./pages/Home/films";
import People from "./pages/Home/people";
import Planets from "./pages/Home/planets";

export default function App() {
  document.title = "Star Wars - Films";

  // Lista dos filmes
  const [dataFilms, setDataFilms] = useState([]);
  // Lista dos planetas
  const [dataPlanets, setDataPlanets] = useState([]);
  // Lista dos personagens
  const [dataPeople, setDataPeople] = useState([]);

  // URL base das imagens films, planetas, personagens
  const imageURL1 = "https://starwars-visualguide.com/assets/img/films/";
  const imageURL2 = "https://starwars-visualguide.com/assets/img/characters/";
  const imageURL3 = "https://starwars-visualguide.com/assets/img/planets/";

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
    // Dados dos personagens
    fecthData("https://swapi.dev/api/people").then((data) => {
      setDataPeople(data.results);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <Films data={dataFilms} img={imageURL1} />
      <People data={dataPeople} img={imageURL2} />
      <Planets data={dataPlanets.slice(1)} img={imageURL3} />
    </>
  );
}
