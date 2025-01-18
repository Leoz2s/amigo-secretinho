import { useEffect, useState } from 'react';

import { Container, Main } from './styles';
import { Header } from '../../components/Header';
import { InputString } from '../../components/InputString';
import { InputNumber } from '../../components/InputNumber';
import { Button } from '../../components/Button';

export function FriendForm() {
  const [editingFriend, setEditingFriend ] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friendSuggestion, setFriendSuggestion] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [friendNumber, setFriendNumber] = useState(0);

  useEffect(() => {
    const newFriend: boolean = false;

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

        <InputString label="Nome" placeholder='Nome do amigo' />
        <InputString label="Sugestões de presente (Opcional)" placeholder='Sugestões ou dicas de presente' />
        <InputString label="E-mail" placeholder='name@email.com' />
        <InputNumber label="Número de Celular" placeholder={'5511987654321'} />

        <Button text={ editingFriend ? "Atualizar amigo" : "Adicionar amigo"} />
        { 
          editingFriend  && 
          <Button text="Remover amigo" altButton /> 
        }
      </Main>
    </Container>
  );
};