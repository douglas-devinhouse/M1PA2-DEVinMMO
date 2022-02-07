import fetchEndPoint from "./fetchEndpoint";

const fetchGame = {
  getGameInfo: async (gameId) => {
    let gameInfo = {};
    if (gameId) {
      gameInfo = await fetchEndPoint(`/game?id=${gameId}`);
    }

    return gameInfo;
  },
};

export default fetchGame;
