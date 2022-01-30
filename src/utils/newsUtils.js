export const filtrarListaNewsPorTermoBusca = (lista, termo) => {
    return lista.filter((news) => {
      return new RegExp(termo, 'ig').test(news.title);
    });
  };