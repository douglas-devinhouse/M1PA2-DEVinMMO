export const filtrarListaGamesPorTermoBusca = (lista, termo) => {
  return lista.filter((game) => {
    return new RegExp(termo, 'ig').test(game.title);
  });
};