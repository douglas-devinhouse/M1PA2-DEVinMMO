import { fecthEndPoint } from "./fetchEndpoint";

export default {
    getAllGames: async () => {
        return [
            {
                slug: 'allGames',
                title: 'Todos os games',
                items: await fecthEndPoint(`/games`)
            }
        ];
    }
}