import { Button, Card } from "react-bootstrap";

const MyCardFood = ({ data }) => {
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
          cuisineType: {data.cuisineType}
        </Card.Text>
        <Card.Text>
          cookingTime: {data.cookingTime}
        </Card.Text>
        <Card.Text>
          garnish: {data.garnish}
        </Card.Text>        <div>
        <Button variant="warning">Edit</Button>
        <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCardFood