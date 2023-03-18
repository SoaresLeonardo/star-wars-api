import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #ffc107; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  /* border-bottom: 1px solid #1c1c1e; */
`;
export const Content = styled.div`
  display: flex;
  width: 1120px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
export const SearchButtonContainer = styled.div`
  input {
    border: none;
    outline: none;
    font-size: 1rem;
  }

  display: flex;
  align-items: center;
  border: 1px solid gray;
  padding: 8px;
  border-radius: 20px;
`;
export const SearchButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 1.3rem;
  margin-left: 10px;
`;
export const ImgHeader = styled.div`
  img {
    width: 80px;
  }
`;
