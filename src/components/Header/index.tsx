import { useNavigate } from "react-router-dom";

import { Container, Logo } from "./styles";
import { PiGift } from "react-icons/pi";

export function Header() {
  const navigate = useNavigate();

  function handleRedirectToHome() {
    navigate("/");
  };

  return(
    <Container>
      <Logo onClick={handleRedirectToHome} >
        <h1>Amigo Secretinho</h1>
        <PiGift />
      </Logo>

      <span>Nunca foi tão fácil fazer um amigo secreto</span>
    </Container>
  );
};