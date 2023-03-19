import {
  Card,
  CardImage,
  CardsWrapper,
  CardTitle,
} from "../../components/Card";
import { Container, Content, Title, TitleContainer } from "./styled";

export default function People({ data, img }) {
  return (
    <Container>
      <TitleContainer>
        <Title>Personagens</Title>
      </TitleContainer>
      <Content>
        <CardsWrapper>
          {data.map((people) => (
            <Card>
              <CardImage src={`${img}${people.url.replace(/\D/g, "")}.jpg`} />
              <CardTitle>{people.name}</CardTitle>
            </Card>
          ))}
        </CardsWrapper>
      </Content>
    </Container>
  );
}
