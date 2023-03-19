import { Container, Content, ImgHeader } from "./styled";

export default function Header() {
  return (
    <Container>
      <Content>
        <ImgHeader>
          <img src="/logoStarWars.png" alt="Logo Star Wars" />
        </ImgHeader>
      </Content>
    </Container>
  );
}
