import React,{useState} from "react";
import { Container, Logo, Wrapper, Title, Link, Division, Mobile,MenuMobile } from "./styles";

export default function Navbar() {
  const [active, setActive] = useState(false)
  return (
    <Container>
      <Logo to="/">BUY.NFT</Logo>
      <Wrapper>
        <Title>Menu</Title>
        <Link to="Dashboard">
          <ion-icon name="star"></ion-icon>
          Dashboard
        </Link>
        <Link to="Market">
          <ion-icon name="storefront"></ion-icon>
          Market
        </Link>
        <Link to="ActiveBid">
          <ion-icon name="pie-chart"></ion-icon>
          Active Bid
        </Link>
        <Link to="Favourites">
          <ion-icon name="heart"></ion-icon>
          Favourites
        </Link>
      </Wrapper>
      <Division />
      <Wrapper>
        <Title>My Profile</Title>
        <Link to="MyPortifolio">
          <ion-icon name="folder-open"></ion-icon>
          My Portifolio
        </Link>
        <Link to="MyCloud">
          <ion-icon name="cloud"></ion-icon>
          Cloud
        </Link>
        <Link to="History">
          <ion-icon name="time"></ion-icon>
          History
        </Link>
        <Link to="Settings">
          <ion-icon name="settings"></ion-icon>
          Settings
        </Link>
      </Wrapper>
      <Mobile onClick={() => setActive(!active)}>
        <ion-icon name="reorder-three"></ion-icon>
      </Mobile>
      <MenuMobile active={active}>
        <Link>Dashboard</Link>
        <Link>Market</Link>
        <Link>Active Bid</Link>
        <Link>Favourites</Link>
        <Link>My Portifolio</Link>
        <Link>Cloud</Link>
        <Link>History</Link>
        <Link>Settings</Link>
      </MenuMobile>
    </Container>
  );
}
