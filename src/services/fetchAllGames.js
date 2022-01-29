import fecthEndPoint from "./fetchEndpoint";

export const fetchAllGames = {
  getAllGames: async () => {
    return await fecthEndPoint(`/games`);
  }
};

export default fetchAllGames;