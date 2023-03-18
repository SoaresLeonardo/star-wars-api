import {
  Container,
  Content,
  ImgHeader,
  SearchButton,
  SearchButtonContainer,
} from "./styled";

import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <Container>
      <Content>
        <ImgHeader>
          <img src="/public/logoStarWars2.png" alt="Logo Star Wars" />
        </ImgHeader>
        <SearchButtonContainer>
          <input type="text" placeholder="Search..." />
          <SearchButton>
            <AiOutlineSearch />
          </SearchButton>
        </SearchButtonContainer>
      </Content>
    </Container>
  );
}
