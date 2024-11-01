import { useNavigate, useParams } from 'react-router-dom';
import { edit } from '../../services/cocktailService';
import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';

const EditCocktail = () => {
  const {id}=useParams()
  console.log(`siam su edit`,id);
  
  const [formData, setFormData] = useState({
    name: '',
    method: '',
    ingredients: [],
    glassType: '',
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
      const updatedCocktail = await edit(id,formData);
      
      
      console.log('Cocktail updated:', updatedCocktail);
      setFormData({
        name: '',
        method: '',
        ingredients: [],
        glassType: '',
        garnish: ''
      });
      alert("Cocktail updated successfully!");
      navigate("/");
    } catch (error) {
      console.error('Error updating cocktail:', error);
      alert("There was an error updating the cocktail.");
    }
  };

  return (
    <Container className="mt-5 text-white bg-dark p-5 rounded">
      <h3>Edit Cocktail</h3>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="cocktailName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter cocktail name"
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
                        <option value="stir">Stir</option>
                        <option value="shake">Shake</option>
                        <option value="blend">Blend</option>
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

                <Form.Group controlId="glassType">
                    <Form.Label>Glass Type</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter glass type"
                        name="glassType"
                        value={formData.glassType}
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
          Update Cocktail
        </Button>
      </Form>
    </Container>
  );
};

export default EditCocktail;
