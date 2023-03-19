import { useEffect, useState } from "react";
import Films from "../../components/Films";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { Container, Content } from "./styled";

export default function Home() {
  document.title = "Star Wars - Films";

  const [data, setData] = useState([]);

  const image_url = "https://starwars-visualguide.com/assets/img/films/";

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
      <Header />
      <Container>
        <Content>
          <Films data={data} img={image_url} />
        </Content>
      </Container>
    </>
  );
}
