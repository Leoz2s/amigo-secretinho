import { Container, Main, FriendsBox, RaffleElement } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { FriendCard } from '../../components/FriendCard';
import { RaffleStatus, RaffleStatusProps } from '../../components/RaffleStatus';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
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
    setFriends(["Gabriel", "Maria", "Paulo"]);
  }, [])

  return(
    <Container>
      <Header />

      <Main>
        <h2>Lista de Amigos:</h2>
        
        <FriendsBox>
          {
            friends[0] && friends.map(friend => <FriendCard friendName={friend || "Error 404"} key={friend} />)
          }
          <FriendCard friendName="Gabriel" />
          <FriendCard friendName="Maria" />
          <FriendCard friendName="Paulo" />
          <FriendCard friendName="Gabriel" />
          <FriendCard friendName="Maria" />
          <FriendCard friendName="Paulo" />
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