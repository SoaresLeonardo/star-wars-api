import {
  Card,
  CardImage,
  CardsWrapper,
  CardTitle,
} from "../../components/Card";
import { Container, Content, Title, TitleContainer } from "./styled";

export default function Starships({ data, img }) {
  return (
    <Container>
      <TitleContainer>
        <Title>Starships</Title>
      </TitleContainer>
      <Content>
        <CardsWrapper>
          {data.map((starship) => (
            <Card>
              <CardImage
                src={`${img}${starship.url.replace(/\D/g, "")}.jpg`}
                alt={starship.name}
              />
              <CardTitle>{starship.name}</CardTitle>
            </Card>
          ))}
        </CardsWrapper>
      </Content>
    </Container>
  );
}
