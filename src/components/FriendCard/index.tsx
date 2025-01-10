import { Container } from "./styles";
import { PiPencilSimple } from "react-icons/pi";

type FriendCardProps = {
  friendName: string
}

export function FriendCard({friendName}: FriendCardProps) {
  return(
    <Container>
      {friendName}
      <PiPencilSimple />
    </Container>
  );
};