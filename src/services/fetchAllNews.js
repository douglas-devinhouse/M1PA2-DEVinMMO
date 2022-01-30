import fetchEndPoint from "./fetchEndpoint";

export const fetchAllNews = {
  getAllNews: async () => {
    return await fetchEndPoint(`/latestnews`);
  }
};