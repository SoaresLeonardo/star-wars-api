import Films from "../../components/Films";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Planets from "../../components/Planets";
import { Container, Content, Title, TitleContainer } from "./styled";

// Destructuring
export default function Home(props) {
  document.title = "Star Wars - Films";

  // Tela de carregamento
  if (props.loading) return <Loading />;

  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <Title>Filmes</Title>
        </TitleContainer>
        <Content>
          <Films data={props.dataFilms} img={props.imageFilmsURL} />
        </Content>
      </Container>
      <Container>
        <TitleContainer>
          <Title>Planetas</Title>
        </TitleContainer>
        <Content>
          <Planets data={props.dataPlanets} img={props.imageURL2} />
        </Content>
      </Container>
    </>
  );
}
