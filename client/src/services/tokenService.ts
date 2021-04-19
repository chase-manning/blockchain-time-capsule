import rinkebyTokens from "../data/rinkebyTokens";
import Token from "../types/Token";
import { TEST_MODE } from "../utils/globals";

export const getTokens = async (): Promise<Token[]> => {
  if (TEST_MODE) return rinkebyTokens;
  const response = await fetch("https://tokens.coingecko.com/uniswap/all.json");
  const data = await response.json();
  const tokens: Token[] = data.tokens;
  tokens.push(ethToken);
  return tokens;
};

export const ethToken: Token = {
  address: "ETH",
  name: "Ether",
  symbol: "ETH",
  decimals: 18,
  logoURI:
    "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880",
};
