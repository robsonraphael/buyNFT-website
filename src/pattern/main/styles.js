import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60%;
  min-width: 40%;

  padding: 20px;

  @media (max-width: 1020px) {
    width: 100%;
    height: 100vw;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 10px;

  border-radius: 20px;
  background-color: #141312;

  width: 80%;
  height: 40px;

  ion-icon {
    font-size: 20px;
    color: #fff;

    padding-left: 5px;

    cursor: pointer;
  }

  @media (max-width: 1020px) {
    width: 65%;
    height: 45px;
  }
`;
export const Search = styled.input.attrs({
  placeholder: "Search Keyword here",
})`
  width: 90%;
  height: 30px;

  outline: none;
  border: none;

  font-size: 1.1em;
  font-family: "Inter";
  color: #fff;

  background-color: transparent;

  ::placeholder {
    color: #f5f5f5;
    font-size: 0.9em;
  }
`;

export const Trending = styled.div`
  display: flex;

  @media (min-width: 1020px){
    justify-content: space-evenly;
  }

  width: 100%;
  height: 100vw;

  padding: 10px;
  margin-top: 10px;

  @media (max-width: 1020px){
    gap: 2rem;
  }
`;

export const Title = styled.h2`
  align-self: flex-start;
  margin-top: 15px;
  margin-left: 10px;

  font-size: 1.4em;
  font-family: "Inter";
  font-weight: 450;
  color: #fff;

  @media (max-width: 1020px){
    font-size: 1.2em;
  }
`;
