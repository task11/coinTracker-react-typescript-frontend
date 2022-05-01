import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color : ${props => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
  display: block;
`;

interface RouteState {
  state: {
    name: string;
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    (async () => {
      const dataInfo = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      // setCoin(json);
      const dataPrice = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      console.log(dataPrice);


    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loding.."}</Title>
      </Header>
      {
        loading ?
          <Loader>Loading!!!!</Loader>
          : null}

    </Container>

  );
}

export default Coin;;