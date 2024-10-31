import axios from './interceptors'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/cocktails`;

export const index = async () => {
    const { data } = await axios.get(BASE_URL)
    return data
} 