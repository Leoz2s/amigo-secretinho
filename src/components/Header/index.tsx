import { Container, Logo } from "./styles";

import { PiGift } from "react-icons/pi";

export function Header() {
  return(
    <Container>
      <Logo>
        <h1>Amigo Secretinho</h1>
        <PiGift />
      </Logo>

      <span>Nunca foi tão fácil fazer um amigo secreto</span>
    </Container>
  );
};