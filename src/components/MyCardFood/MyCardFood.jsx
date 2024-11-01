// import { Button, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { deleteFood, index } from "../../services/foodService";

// const MyCardFood = ({ data, setFoodList }) => {
//   const navigate = useNavigate();
  
//   const goToEdit = () => {
//     navigate(`/edit-food/${data._id}`);
//   };

//   const removeFood = async (e) => {
//     e.preventDefault();
//     try {
//       await deleteFood(data._id);
//       const getFoodList = await index();
//       setFoodList(getFoodList);
//       alert(`${data.name} deleted successfully!`);
//     } catch (error) {
//       console.error('Error deleting food:', error);
//       alert("There was an error deleting the food.");
//     }
//   };

//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={data.image} alt={`${data.name}`} />
//       <Card.Body>
//         <Card.Title>{data.name}</Card.Title>
//         <Card.Text>
//           Method: {data.method}
//         </Card.Text>
//         <Card.Text>
//           Ingredients: {data.ingredients.join(', ')}
//         </Card.Text>
//         <Card.Text>
//           Cuisine Type: {data.cuisineType}
//         </Card.Text>
//         <Card.Text>
//           Cooking Time: {data.cookingTime}
//         </Card.Text>
//         <Card.Text>
//           Garnish: {data.garnish}
//         </Card.Text>
//         <div className="d-flex justify-content-between">
//           <Button variant="warning" onClick={goToEdit}>Edit</Button>
//           <Button variant="danger" onClick={removeFood}>Delete</Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// }

// export default MyCardFood;