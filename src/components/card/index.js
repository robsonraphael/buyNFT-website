import React from "react";
import {
  Container,
  Image,
  Wrap,
  Title,
  WrapProfile,
  Profile,
  ProfileName,
} from "./styles";
import Button from "../../components/button";

export default function Card({ source, title, profile, name, textBtn }) {
  return (
    <Container>
      <Image src={source} />
      <Wrap>
        <Title>{title}</Title>
        <WrapProfile>
          <Profile src={profile} />
          <ProfileName>{name}</ProfileName>
          <Button content={textBtn} />
        </WrapProfile>
      </Wrap>
    </Container>
  );
}
