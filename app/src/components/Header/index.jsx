import { Container, Content, ImgHeader } from "./styled";

import { AiFillGithub } from "react-icons/ai";

export default function Header() {
  return (
    <Container>
      <Content>
        <ImgHeader>
          <img src="/public/logoStarWars.png" alt="Logo Star Wars" />
        </ImgHeader>
      </Content>
    </Container>
  );
}
