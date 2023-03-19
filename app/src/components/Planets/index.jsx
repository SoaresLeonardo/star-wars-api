import { Card, CardImage, CardsWrapper, CardTitle } from "../Card";

export default function Planets({ data, img }) {
  return (
    <CardsWrapper>
      {data.map((planet) => (
        <Card>
          <CardImage src={`${img}${planet.url.replace(/\D/g, "")}.jpg`} />
          <CardTitle>{planet.title}</CardTitle>
        </Card>
      ))}
    </CardsWrapper>
  );
}
