import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 2px 4px gray;
  padding: 16px;
  width: 300px;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 20px 15px 0;
  align-items: center;
  margin-bottom: 20px;
  transition: 0.2s;
  &:hover {
    transform: translateY(-20px);
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  margin: 0 0 16px;
  text-align: center;
`;
