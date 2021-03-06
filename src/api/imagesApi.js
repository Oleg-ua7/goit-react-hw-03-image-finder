import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

const key = '20561095-267f08782ac28521eab89938a';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default fetchImagesWithQuery;
