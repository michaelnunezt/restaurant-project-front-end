import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteCocktail, index } from "../../services/cocktailService";

const MyCardCocktail = ({ data, setCocktailList }) => {
const navigate=useNavigate()
const goToEdit=()=>{
navigate(`/edit-cocktail/${data._id}`)
}
const removeCocktail= async (e) => {
  e.preventDefault();
    try {
      const deletedCocktail = await deleteCocktail(data._id);
      const getCocktailList= await index();
      setCocktailList(getCocktailList)
      alert(`${data.name} deleted successfully!`)
} catch (error) {
  console.error('Error deleting cocktail:', error);
  alert("There was an error deleting the cocktail.");
}
}
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          method: {data.method}
        </Card.Text>
        <Card.Text>
          ingredients: {data.ingredients}
        </Card.Text>
        <Card.Text>
          glassType: {data.glassType}
        </Card.Text>
        <Card.Text>
          garnish: {data.garnish}
        </Card.Text>
        <div className="d-flex justify-content-between">
        <Button variant="warning" onClick={goToEdit}>Edit</Button>
        <Button variant="danger" onClick={removeCocktail}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCardCocktail