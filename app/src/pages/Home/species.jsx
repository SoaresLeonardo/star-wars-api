import {
  Card,
  CardImage,
  CardsWrapper,
  CardTitle,
} from "../../components/Card";
import { Container, Content, Title, TitleContainer } from "./styled";

export default function Species({ data, img }) {
  return (
    <Container>
      <TitleContainer>
        <Title>Species</Title>
      </TitleContainer>
      <Content>
        <CardsWrapper>
          {data.map((specie) => (
            <Card>
              <CardImage
                src={`${img}${specie.url.replace(/\D/g, "")}.jpg`}
                alt={specie.name}
              />
              <CardTitle>{specie.name}</CardTitle>
            </Card>
          ))}
        </CardsWrapper>
      </Content>
    </Container>
  );
}
