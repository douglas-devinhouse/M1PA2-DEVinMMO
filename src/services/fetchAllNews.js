import fetchEndPoint from "./fetchEndpoint";

const fetchAllNews = {
    getAllNews: async () => {
        return [
            {
                slug: 'allNews',
                title: 'Todos as notícias',
                items: await fetchEndPoint(`/latestnews`)
            }
        ];
    }
};

export default fetchAllNews;