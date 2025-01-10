import { Container, Main, FriendsBox } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export function Home() {
  
  return(
    <Container>
      <Header />

      <Main>
        <h2>Lista de Amigos:</h2>
        
        <FriendsBox>
          
        </FriendsBox>

        <Button />
        <Button />
      </Main>
    </Container>
  );
};