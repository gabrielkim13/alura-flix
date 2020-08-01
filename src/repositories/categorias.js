import config from '../config';

const URL_CATEGORIAS = `${config.BASE_URL}/categorias`;

const getAll = async () => {
  const response = await fetch(URL_CATEGORIAS);

  if (!response.ok) throw new Error('Could not fetch data from server!', response.status);

  return response.json();
};

const getAllWithVideos = async () => {
  const response = await fetch(`${URL_CATEGORIAS}?_embed=videos`);

  if (!response.ok) throw new Error('Could not fetch data from server!', response.status);

  return response.json();
};

export default {
  getAllWithVideos,
  getAll,
};
