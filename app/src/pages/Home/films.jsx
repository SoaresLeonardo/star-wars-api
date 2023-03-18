import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

export default function Films() {
  document.title = "Star Wars - Films";

  const [data, setData] = useState([]);

  // Estado do loading...
  const [loading, setLoading] = useState(false);

  const fecthData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setData(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Url da API
    const films = "https://swapi.dev/api/films";
    fecthData(films);
  }, []);

  console.log(data);

  if (loading) return <Loading />;

  return (
    <>
    <Header/>
    {data.map((film) => (
      <div>{film.title}</div>
    ))}
    </>
  );
}
