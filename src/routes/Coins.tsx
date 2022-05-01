import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color : ${props => props.theme.accentColor}
`;

function Coins() {

  return <Title>Coins 코인들</Title>;
}

export default Coins;