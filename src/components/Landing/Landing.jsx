import { Button, Container } from "react-bootstrap";
import MyNavBar from "../NavBar/MyNavBar";
import { useNavigate } from "react-router-dom";
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate("/signIn");
  };
  const goToSignUp = () => {
    navigate("/signUp");
  };
  return (
    <>
      <MyNavBar className="fixed-top" />
      <Container className="text-white d-flex flex-column  align-items-center">
        <h1 className="text-center text-white my-5">Oriole</h1>

        <p>

Welcome to Oriole!

Sign up to join a vibrant community of food and cocktail enthusiasts. Whether you're an experienced mixologist or a curious foodie, here, you can create and share your own unique cocktails and recipes. Discover new flavors, save your favorite creations, and inspire others with your culinary masterpieces.

Dive in, get creative, and start crafting unforgettable dishes and drinks today!
        </p>
        <div className="mt-5">
          <Button className="button-dark-grey mx-5" onClick={goToSignIn}>
            Sign IN
          </Button>
          <Button className="button-dark-grey" onClick={goToSignUp}>Sign Up</Button>
        </div>
      </Container>
    </>
  );
};

export default Landing;
