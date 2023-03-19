import { Circle, Container, Content, ImgLoading, LdsRing } from "./styled";

export default function Loading() {
  return (
    <Container>
      <Content>
        <ImgLoading>
        <img src="/logoStarWars.png" alt="Loading" />
        </ImgLoading>
        <LdsRing>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
        </LdsRing>
      </Content>
    </Container>
  );
}
