import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '24541391-b479c34a264a17829baf6aba8';

export const getImages = async (query, page) => {
    const response = await axios.get(
        `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);    
    const images =  response.data.hits;
    return images;
};

