const API_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return fetch(`${API_URL}/coins`)
    .then(res => res.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${API_URL}/coins/${coinId}`).then(res => res.json());
}

export function fetchCoinTikers(coinId: string) {
  return fetch(`${API_URL}/tickers/${coinId}`).then(res => res.json());
}
