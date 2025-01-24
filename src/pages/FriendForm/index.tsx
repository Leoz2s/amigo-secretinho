import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFriends } from '../../hooks/friends';

import { Container, Main } from './styles';
import { Header } from '../../components/Header';
import { InputString } from '../../components/InputString';
import { InputNumber } from '../../components/InputNumber';
import { Button } from '../../components/Button';

export function FriendForm() {
  const navigate = useNavigate();
  const {createFriend, getFriend} = useFriends();
  const [editingFriend, setEditingFriend ] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friendSuggestion, setFriendSuggestion] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [friendNumber, setFriendNumber] = useState(0);

  function handleAddFriend() {
    console.log(friendName, friendSuggestion, friendEmail, friendNumber);
    createFriend({name: friendName, suggestion: friendSuggestion, email: friendEmail, number: friendNumber});
    navigate(-1);
  };

  function handleUpdateFriend() {
    getFriend();
    navigate(-1);
  };

  function handleRemoveFriend() {

    navigate(-1);
  };

  useEffect(() => {

    const newFriend: boolean = true;

    if(newFriend == false) {
      setEditingFriend(true);

      setFriendName("Karl");
      setFriendSuggestion("Suggestion");
      setFriendEmail("karl@email.com");
      setFriendNumber(0);
    };


  },[]);

  return(
    <Container>
      <Header />

      <Main>
        <h2>{ editingFriend ? "Editar amigo" : "Adicionar novo amigo" }</h2>

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