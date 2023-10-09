import React from "react";
import Lottie from "lottie-react";
import { Container } from "reactstrap";
import NotFoundAnimation from "./../assets/animations/notFound.json";
const notFound = () => {
  return (
    <Container>
      <div className="not-found-area">
        <Lottie loop={true} animationData={NotFoundAnimation} />
      </div>
    </Container>
  );
};

export default notFound;
