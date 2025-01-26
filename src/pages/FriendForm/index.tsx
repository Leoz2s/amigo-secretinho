import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFriends } from '../../hooks/friends';

import { Container, Main, ReturnAndTitle } from './styles';
import { Header } from '../../components/Header';
import { InputString } from '../../components/InputString';
import { InputNumber } from '../../components/InputNumber';
import { Button } from '../../components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export function FriendForm() {
  const navigate = useNavigate();
  const {createFriend, getFriend, updateFriend, deleteFriend} = useFriends();
  const [editingFriend, setEditingFriend ] = useState(false);
  const [friendID, setFriendID] = useState(0);
  const [friendName, setFriendName] = useState("");
  const [friendSuggestion, setFriendSuggestion] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [friendNumber, setFriendNumber] = useState(0);

  function handleReturn() {
    navigate(-1);
  };

  function handleAddFriend() {
    createFriend({name: friendName, suggestion: friendSuggestion, email: friendEmail, number: friendNumber});
    navigate(-1);
  };

  function handleUpdateFriend() {
    updateFriend({id: friendID, name: friendName, suggestion: friendSuggestion, email: friendEmail, number: friendNumber});
    navigate(-1);
  };

  function handleRemoveFriend() {
    deleteFriend(friendID);
    navigate(-1);
  };

  useEffect(() => {
    const id = 1

    const newFriend:boolean = (id <= 0);
    if(newFriend == false) {
      const friend = getFriend(id);
      if(friend) {
        setEditingFriend(true);
        setFriendID(friend.id);
        setFriendName(friend.name);
        setFriendSuggestion(friend.suggestion);
        setFriendEmail(friend.email);
        setFriendNumber(friend.number);
      }else {setEditingFriend(false)};
    }else {setEditingFriend(false)};
  },[]);

  return(
    <Container>
      <Header />

      <Main>
        <ReturnAndTitle>
          <button onClick={handleReturn}>
            <FaArrowLeft />
          </button>
          <h2>{ editingFriend ? "Editar amigo" : "Adicionar novo amigo" }</h2>
        </ReturnAndTitle>

        <InputString label="Nome" placeholder='Nome do amigo' 
          onChange={e => setFriendName(e.target.value)} />
        <InputString label="Sugestões de presente (Opcional)" placeholder='Sugestões ou dicas de presente' 
          onChange={e  => setFriendSuggestion(e.target.value)} />
        <InputString label="E-mail" placeholder='name@email.com' 
          onChange={e  => setFriendEmail(e.target.value)} />
        <InputNumber label="Número de Celular" placeholder={'5511987654321'} 
          setFriendNumber={number => setFriendNumber(number)} />

        <Button text={ editingFriend ? "Atualizar amigo" : "Adicionar amigo" }
          onClick={editingFriend ? handleUpdateFriend : handleAddFriend }
        />
        { 
          editingFriend  && 
          <Button text="Remover amigo" altButton 
            onClick={handleRemoveFriend}
          /> 
        }
      </Main>
    </Container>
  );
};