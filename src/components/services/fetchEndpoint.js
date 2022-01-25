
export const fecthEndPoint = async (endPoint) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL_BASE}${endPoint}`, {
            method: 'GET',
            headers: {
                "x-rapidapi-host": `${process.env.REACT_APP_API_HOST}`,
                "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
            },
        });
        const listaGames = await response.json();
        return listaGames;
    } catch (erro) {
        console.log(erro.message);
    }
};