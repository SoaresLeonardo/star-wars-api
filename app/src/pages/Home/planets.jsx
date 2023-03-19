import {
  Card,
  CardImage,
  CardsWrapper,
  CardTitle,
} from "../../components/Card";
import { Container, Content, Title, TitleContainer } from "./styled";

export default function Planets({ data, img }) {
  return (
    <Container>
      <TitleContainer>
        <Title>Planetas</Title>
      </TitleContainer>
      <Content>
        <CardsWrapper>
          {data.map((planet) => (
            <Card>
              <CardImage
                src={`${img}${planet.url.replace(/\D/g, "")}.jpg`}
                alt={planet.name}
              />
              <CardTitle>{planet.name}</CardTitle>
            </Card>
          ))}
        </CardsWrapper>
      </Content>
    </Container>
  );
}
