import Films from "../../components/Films";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { Container, Content } from "./styled";

                            // Destructuring
export default function Home({ loading, data, imageURL }) {
  document.title = "Star Wars - Films";

  console.log(data);

  // Tela de carregamento
  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Films data={data} img={imageURL} />
        </Content>
      </Container>
    </>
  );
}
