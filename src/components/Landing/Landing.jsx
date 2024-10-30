import { Carousel } from "react-bootstrap";
import Home1 from "../../assets/images/home01.jpg"
import Home2 from "../../assets/images/home02.jpg"
import Home3 from "../../assets/images/home03.jpg"
import NavBar from "../NavBar/NavBar";


const Landing = () => {
    return (
      <div style={{ position: "absolute", top: 0, width: "100%", zIndex: 1 }}>
        <div className="positioning">
        <NavBar />
      </div>

      <Carousel className="carousel" slide={true}>
      <Carousel.Item>
        <img className="img-carousel"
          src={Home1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carousel"
          src={Home2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carousel"
          src={Home3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
</div>
  );
};

export default Landing;
