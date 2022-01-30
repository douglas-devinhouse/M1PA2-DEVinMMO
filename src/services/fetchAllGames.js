import fetchEndPoint from "./fetchEndpoint";

export const fetchAllGames = {
  getAllGames: async () => {
    return await fetchEndPoint(`/games`);
  }
};
