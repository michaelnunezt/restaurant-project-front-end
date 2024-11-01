import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/userService";


const SignupForm = ({ setUser }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState([""]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    updateMessage("");
      try {
        const { user } = await signup(formData) 
        setUser(user) // set user to state
        navigate('/') // navigate to dashboard
      } catch (error) {
        console.log(error)
      }
    }


  const { username, password, confirmPassword } = formData;

  const isFormInvalid = () => {
    return !(username && password && password === confirmPassword);
  };

  return (
    <main className="text-white">
      <p>{message}</p>
      <form onSubmit={handleSubmit} className="bg-dark rounded p-5">
        <h1 className="mb-4">Sign Up</h1>
        <div className="mb-4">
          <label htmlFor="username" className="form-label">
            Email:
          </label>
          <input
            placeholder="Email"
            className="form-control"
            type="text"
            id="name"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            placeholder="password"
            className="form-control"
            type="password"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            placeholder="confirm password"
            className="form-control"
            type="password"
            id="confirm"
            value={confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        <div>
          <Button className="mt-5" disabled={isFormInvalid()} type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </main>
  );
};

export default SignupForm;
