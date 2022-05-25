import React, { useState } from "react";
import { Container, SearchBar, Search, Trending, Title } from "./styles";

/* Image */
import card1 from "../../img/card1.png";
import card2 from "../../img/card2.png";
import perf1 from "../../img/perf1.png";
import perf2 from "../../img/perf2.png";

/* Components */
import Button from "../../components/button";
import Banner from "../../components/banner";
import Card from "../../components/card";

export default function Main() {
  return (
    <Container>
      <SearchBar>
        <ion-icon name="search"></ion-icon>
        <Search />
      </SearchBar>
      <Banner text="Create your own NFT" textBtn="Start here" />
      <Title>Trending NFT</Title>
      <Trending>
        <Card
          source={card1}
          title="Wrost ArtWork"
          profile={perf1}
          name="Tom Holland"
          textBtn={"3.5 ETH"}
        />
        <Card
          source={card2}
          title="Muaal ArtWork"
          profile={perf2}
          name="Mufasa"
          textBtn={"4 ETH"}
        />
      </Trending>
    </Container>
  );
}
