import {
  Card,
  CardImage,
  CardsWrapper,
  CardTitle,
} from "../../components/Card";
import { Container, Content, Title, TitleContainer } from "./styled";

export default function Films({ data, img }) {
  return (
    <Container>
      <TitleContainer>
        <Title>Filmes</Title>
      </TitleContainer>
      <Content>
        <CardsWrapper>
          {data.map((film) => (
            <Card>
              <CardImage
                src={`${img}${film.url.replace(/\D/g, "")}.jpg`}
                alt={film.title}
              />
              <CardTitle>{film.title}</CardTitle>
            </Card>
          ))}
        </CardsWrapper>
      </Content>
    </Container>
  );
}
