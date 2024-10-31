import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyCardCocktail = ({ data }) => {
const navigate=useNavigate()
  const goToEdit=()=>{
navigate(`/edit-cocktail/${data._id}`)
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
        <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCardCocktail