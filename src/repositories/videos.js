import config from '../config';

const URL_CATEGORIAS = `${config.BASE_URL}/videos`;

const create = async (video) => {
  const response = await fetch(`${URL_CATEGORIAS}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(video),
  });

  if (!response.ok) throw new Error('Could not post data to server!', response.status);

  return response;
};

export default {
  create,
};
