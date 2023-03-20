import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import {
  Container,
  Content,
  Description,
  DetailsImage,
  DetailsIntro,
  Director,
  Producer,
  ReleaseDate,
  Title,
} from "./styled";

export default function Details() {
  // Recebendo os parametros da URL; a caregoria e o id do item que será buscado
  const { category, id, other } = useParams();
  // URL base da API
  const URL = "https://swapi.dev/api/";

  // Obj aonde irá conter todas as chaves sobre o que foi encontrado
  const [dataDetails, setDataDetails] = useState({});
  console.log(dataDetails);

  // Estado do loading...
  const [loading, setLoading] = useState(false);

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
    const detailsURL = `${URL}${category}/${id}`;
    fecthData(detailsURL).then((data) => {
      const objDetails = {
        title: data.title,
        description: data.opening_crawl,
        director: data.director,
        producer: data.producer,
        releaseDate: data.release_date,
      };

      setDataDetails(objDetails);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Container>
        <Content>
          <DetailsImage>
            <img
              src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`}
              alt={dataDetails.title}
            />
          </DetailsImage>
          <DetailsIntro>
            <Title>{dataDetails.title}</Title>
            <Description>{dataDetails.description}</Description>
            <Director>{dataDetails.director}</Director>
            <Producer>{dataDetails.producer}</Producer>
            <ReleaseDate>{dataDetails.releaseDate}</ReleaseDate>
          </DetailsIntro>
        </Content>
      </Container>
    </>
  );
}
