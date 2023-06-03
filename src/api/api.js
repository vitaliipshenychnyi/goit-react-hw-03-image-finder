import axios from 'axios';

const URL = 'https://pixabay.com/api/';

export const fetchPictures = async (textSearch, page) => {
  const response = await axios.get(
    `${URL}?q=${textSearch}&page=${page}&key=35659797-8cc42750c81fcd96097728ed9&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
