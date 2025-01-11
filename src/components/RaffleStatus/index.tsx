import { Container } from "./styles";
import { PiCircleNotch, PiCheckCircle, PiXCircle } from "react-icons/pi";

const statusOptions = ["waiting", "successful", "failed"];

type RaffleStatusProps = {
  status: string | "none" | "waiting" | "successful" | "failed";
};

export function RaffleStatus({status}: RaffleStatusProps) {
  return(
    <Container className={status} >
      <p className="upperText">
        { 
          status === statusOptions[0] && "Estamos sorteando os amigos..." 
          ||
          status === statusOptions[1] && "Vocês receberão a mensagem em breve."
          ||
          status === statusOptions[2] && "Algo deu errado..."
        }
      </p>

      { 
        status === statusOptions[0] && <PiCircleNotch />
        ||
        status === statusOptions[1] && <PiCheckCircle /> 
        ||
        status === statusOptions[2] && <PiXCircle />
      }

      <p className="lowerText" >
        { 
          status === statusOptions[0] && "" 
          ||
          status === statusOptions[1] && "Bom amigo secreto!"
          ||
          status === statusOptions[2] && "Tente novamente mais tarde."
        }
      </p>
    </Container>
  );
};