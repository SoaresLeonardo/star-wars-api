import { Card, CardImage, CardsWrapper, CardTitle } from "../Card";

export default function Films({ data, img }) {
  return (
    <CardsWrapper>
      {data.map((film) => (
        <Card>
          <CardImage src={`${img}${film.url.replace(/\D/g, "")}.jpg`} />
          <CardTitle>{film.title}</CardTitle>
        </Card>
      ))}
    </CardsWrapper>
  );
}
