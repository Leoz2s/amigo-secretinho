import { Container, Main, FriendsBox, RaffleElement } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { FriendCard } from '../../components/FriendCard';
import { RaffleStatus, RaffleStatusProps } from '../../components/RaffleStatus';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFriends, FriendObjectProps } from '../../hooks/friends';

export function Home() {
  const {indexFriends} = useFriends();
  const [friends, setFriends] = useState<[string?, string?, string?]>([]);
  const [raffleState, setRaffleState] = useState<string>("none");
  const navigate =  useNavigate();

  function handleRedirectToFriendsForm() {
    navigate("/friend");
  };

  function handleRaffle() {
    if(raffleState == "none") {
      setRaffleState("waiting");
      setRaffleState("successful");
      setRaffleState("failed");
    }else {
      setRaffleState("none");
    };
  };

  useEffect(() => {
    const friendsIndex = indexFriends();
    setFriends(friendsIndex);
  }, [])

  return(
    <Container>
      <Header />

      <Main>
        <h2>Lista de Amigos:</h2>
        
        <FriendsBox>
          {
            friends[0] && friends.map((friend) => <FriendCard friendName={friend.name || "Error 404"} friendID={friend.id} key={friend.id} />)
          }
          {
            friends[0] == undefined && <h3>Você não tem amigos ainda =(</h3>
          }
        </FriendsBox>

        <Button text="Adicionar novo amigo" onClick={handleRedirectToFriendsForm} />
        <Button text="Sortear os amigos secretos" altButton onClick={handleRaffle} />
        
        <RaffleElement className={raffleState == "none" ? "" : "raffling"} onClick={handleRaffle} >
          <RaffleStatus status={raffleState} />
        </RaffleElement>
      </Main>
    </Container>
  );
};