import fetchEndPoint from "./fetchEndpoint";

// export const fetchGame = () => {
//   return [
//     {
//         getGameInfo: async (gameId) => {
//             let gameInfo = {};
//             if(gameId) {
//                 gameInfo = await fetchEndPoint(`/game?id=${gameId}`);
//             }

//             return gameInfo;
//             //return await fetchEndPoint(`/game?id=${gameId}`);
//         }
//     }
//   ];
// };

const fetchGame = {
    getGameInfo: async (gameId) => {
        let gameInfo = {};
        if(gameId) {
            gameInfo = await fetchEndPoint(`/game?id=${gameId}`);
        }

        return gameInfo;
        //return await fetchEndPoint(`/game?id=${gameId}`);
    }
}

export default fetchGame;