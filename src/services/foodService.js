import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/foods`;

// Fetch All Foods
export const index = async () => {
  const { data } = await axios.get(BASE_URL)
  return data;
} 

// Create Food
export const create = async (foodData) => {
  const { data } = await axios.post(BASE_URL, foodData);
  return data;
}

//Edit Food
export const edit = async (id,foodData) => {
  const { data } = await axios.put(`${BASE_URL}/${id}`, foodData );
  return data;
}
// Delete Food

export const deleteFood = async (id)=>{
  const {data}= await axios.delete(`${BASE_URL}/${id}`)
}




// const index = async () => {
//   try {
//     const res = await fetch(BASE_URL);
//     return res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// export { index };