import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { PiPencilSimple } from "react-icons/pi";

type FriendCardProps = {
  friendName: string;
  friendID: number;
};

export function FriendCard({friendName, friendID}: FriendCardProps) {
  const navigate = useNavigate();

  function handleUpdateFriend() {
    navigate(`/friend/${friendID}`);
  };

  return(
    <Container>
      {friendName}
      <PiPencilSimple onClick={handleUpdateFriend} />
    </Container>
  );
};