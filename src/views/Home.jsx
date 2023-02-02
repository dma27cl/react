import React from 'react'
import { Container } from "react-bootstrap";
import cake from "../img/cake.jpg";

const Home = () => {
  return (
    <div>
      <Container>
        <h1 className="mt-5 pt-5 ms-5">
          Bienvenidos a <br></br><span className="fw-bold">Happy Cake</span>
        </h1>
        <h6 className='ms-5'> El lugar de los pasteles felices </h6>
        <img src={cake}
              width="500"
              height="300"
              className="imgCake" />
      </Container>
    </div>
  )
}

export default Home