import { useEffect, useState } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Films from "./pages/Home/films";
import People from "./pages/Home/people";
import Planets from "./pages/Home/planets";
import Species from "./pages/Home/species";
import Starships from "./pages/Home/starships";
import Vehicles from "./pages/Home/vehicles";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

export default function App() {
  document.title = "Star Wars - Films";

  // Lista dos filmes
  const [dataFilms, setDataFilms] = useState([]);
  // Lista dos planetas
  const [dataPlanets, setDataPlanets] = useState([]);
  // Lista dos personagens
  const [dataPeople, setDataPeople] = useState([]);
  // Lista das species
  const [dataSpecies, setDataSpecies] = useState([]);
  // Lista dos veiculos
  const [dataVehicles, setDataVehicles] = useState([]);

  const [dataStarships, setDataStarships] = useState([]);

  // URL base das imagens films, planetas, personagens, species, vehicles, starships
  const imageURL1 = "https://starwars-visualguide.com/assets/img/films/";
  const imageURL2 = "https://starwars-visualguide.com/assets/img/characters/";
  const imageURL3 = "https://starwars-visualguide.com/assets/img/planets/";
  const imageURL4 = "https://starwars-visualguide.com/assets/img/species/";
  const imageURL5 = "https://starwars-visualguide.com/assets/img/vehicles/";
  const imageURL6 = "https://starwars-visualguide.com/assets/img/starships/";

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
    // Dados das species
    fecthData("https://swapi.dev/api/species").then((data) => {
      setDataSpecies(data.results);
    });
    // Dados dos veiculos
    fecthData("https://swapi.dev/api/vehicles").then((data) => {
      setDataVehicles(data.results);
    });

    fecthData("https://swapi.dev/api/starships").then((data) => {
      setDataStarships(data.results);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <Films data={dataFilms} img={imageURL1} />
      <People data={dataPeople} img={imageURL2} />
      <Planets data={dataPlanets} img={imageURL3} />
      <Species data={dataSpecies} img={imageURL4} />
      <Vehicles data={dataVehicles} img={imageURL5} />
      <Starships data={dataStarships} img={imageURL6} />
    </>
  );
}
