import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFriends } from '../../hooks/friends';

import { Container, Main, Form, ReturnAndTitle } from './styles';
import { Header } from '../../components/Header';
import { InputString } from '../../components/InputString';
import { InputNumber } from '../../components/InputNumber';
import { Button } from '../../components/Button';
import { FaArrowLeft } from 'react-icons/fa';

export function FriendForm() {
  const navigate = useNavigate();
  const {id} = useParams();
  const {createFriend, getFriend, updateFriend, deleteFriend} = useFriends();
  const [editingFriend, setEditingFriend ] = useState(false);
  const [friendID, setFriendID] = useState(0);
  const [friendName, setFriendName] = useState("");
  const [friendSuggestion, setFriendSuggestion] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [friendNumber, setFriendNumber] = useState(0);

  function handleReturn() {
    navigate("/");
  };

  function handleAddFriend() {
    const validEmailFormatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailInValidFormat = validEmailFormatRegex.test(friendEmail);

    if(friendName != "" && ((friendEmail != "" && isEmailInValidFormat) || (friendNumber != 0 && String(friendNumber).length == 13))) {
      createFriend({name: friendName, suggestion: friendSuggestion, email: friendEmail, number: friendNumber});
      navigate("/");
    }else {
      alert("Preencha o nome e pelo menos uma forma de contato para adicionar um amigo.");
    };
  };

  function handleUpdateFriend() {
    updateFriend({id: friendID, name: friendName, suggestion: friendSuggestion, email: friendEmail, number: friendNumber});
    navigate("/");
  };

  function handleRemoveFriend() {
    deleteFriend(friendID);
    navigate("/");
  };

  useEffect(() => {
    if(id) {
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
        <Form>
          <ReturnAndTitle>
            <button onClick={handleReturn} aria-label='Retornar' >
              <FaArrowLeft />
            </button>
            <h2>{ editingFriend ? "Editar amigo" : "Adicionar novo amigo" }</h2>
          </ReturnAndTitle>

          <InputString label="Nome" placeholder='Nome do amigo' 
            onChange={setFriendName} value={friendName} />
          <InputString label="Sugestões de presente (Opcional)" placeholder='Sugestões ou dicas de presente' 
            onChange={setFriendSuggestion} value={friendSuggestion} />
          <InputString label="E-mail" placeholder='nome@email.com' 
            onChange={setFriendEmail} value={friendEmail} />
          <InputNumber label="Número de Celular" placeholder={'5511987654321'} 
            setFriendNumber={number => setFriendNumber(number)} value={friendNumber} />

          <Button text={ editingFriend ? "Atualizar amigo" : "Adicionar amigo" }
            onClick={editingFriend ? handleUpdateFriend : handleAddFriend }
          />
          { 
            editingFriend  && 
            <Button text="Remover amigo" altButton 
              onClick={handleRemoveFriend}
            /> 
          }
        </Form>
      </Main>
    </Container>
  );
};