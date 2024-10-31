import axios from './interceptors'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/cocktails`;

// Fetch All Cocktails
export const index = async () => {
    const { data } = await axios.get(BASE_URL)
    return data;
} 

// Create Cocktail
export const create = async (cocktailData) => {
    const { data } = await axios.post(BASE_URL, cocktailData);
    return data;
}