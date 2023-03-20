import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  display: flex;
  max-width: 1400px;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
  @media (max-width: 968px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const DetailsImage = styled.div`
  width: 25%;
  img {
    width: 350px;
  }
  @media (max-width: 968px) {
    img {
      width: 100%;
    }
    width: 60%;
  }
`;
export const DetailsIntro = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;

  h1,
  p {
    padding-bottom: 20px;
  }
  @media (max-width: 968px) {
    width: 60%;
  }
  @media (max-width: 544px) {
    width: 90%;
  }
`;
export const Title = styled.h1``;
export const Description = styled.p``;
