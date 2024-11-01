import { useNavigate, useParams } from 'react-router-dom';
import { edit } from '../../services/foodService';
import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';

const EditFood = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    method: '',
    ingredients: [],
    cuisineType: '',
    cookingTime: '',
    garnish: ''
  });

  const [ingredientInput, setIngredientInput] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleIngredientChange = (e) => {
    setIngredientInput(e.target.value);
  };

  const handleAddIngredient = () => {
    if (ingredientInput) {
      setFormData((prevData) => ({
        ...prevData,
        ingredients: [...prevData.ingredients, ingredientInput]
      }));
      setIngredientInput('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFood = await edit(id, formData);
      console.log('Food updated:', updatedFood);
      setFormData({
        name: '',
        method: '',
        ingredients: [],
        cuisineType: '',
        cookingTime: '',
        garnish: ''
      });
      alert("Food updated successfully!");
      navigate("/");
    } catch (error) {
      console.error('Error updating food:', error);
      alert("There was an error updating the food.");
    }
  };

  return (
    <Container className="mt-5 text-white bg-dark p-5 rounded">
      <h3>Edit Food</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="foodName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter food name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="method">
          <Form.Label>Method</Form.Label>
          <Form.Control
            as="select"
            name="method"
            value={formData.method}
            onChange={handleChange}
          >
            <option value="">Select method</option>
            <option value="boil">Boil</option>
            <option value="bake">Bake</option>
            <option value="fry">Fry</option>
            <option value="grill">Grill</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="ingredients">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter an ingredient"
            value={ingredientInput}
            onChange={handleIngredientChange}
          />
          <Button
            variant="secondary"
            onClick={handleAddIngredient}
            className="mt-2"
          >
            Add Ingredient
          </Button>
          <ul className="mt-2">
            {formData.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Form.Group>

        <Form.Group controlId="cuisineType">
          <Form.Label>Cuisine Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter cuisine type"
            name="cuisineType"
            value={formData.cuisineType}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="cookingTime">
          <Form.Label>Cooking Time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter cooking time (e.g., 30 minutes)"
            name="cookingTime"
            value={formData.cookingTime}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="garnish">
          <Form.Label>Garnish</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter garnish"
            name="garnish"
            value={formData.garnish}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Update Food
        </Button>
      </Form>
    </Container>
  );
};

export default EditFood;