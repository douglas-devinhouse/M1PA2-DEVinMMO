import { fecthEndPoint } from "./fetchEndpoint";

export default {
    getAllNews: async () => {
        return [
            {
                slug: 'allNews',
                title: 'Todos as notícias',
                items: await fecthEndPoint(`/latestnews`)
            }
        ];
    }
}