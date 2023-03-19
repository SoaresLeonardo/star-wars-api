import {
  Card,
  CardImage,
  CardsWrapper,
  CardTitle,
} from "../../components/Card";
import { Container, Content, Title, TitleContainer } from "./styled";

export default function Vehicles({ data, img }) {
  return (
    <Container>
      <TitleContainer>
        <Title>Vehicles</Title>
      </TitleContainer>
      <Content>
        <CardsWrapper>
          {data.map((vehicles) => (
            <Card>
              <CardImage
                src={`${img}${vehicles.url.replace(/\D/g, "")}.jpg`}
                alt={vehicles.name}
              />
              <CardTitle>{vehicles.name}</CardTitle>
            </Card>
          ))}
        </CardsWrapper>
      </Content>
    </Container>
  );
}
