import React from "react";
import { Card, Col } from "react-bootstrap";

const CardComponent = ({ name = "", image = "", description = "" }) => {
  return (
    <>
      <Col sm={12} md={6} lg={4} xl={4}>
        <Card className="my-2 p-1 rounded cards">
          <Card.Img
            className="card-img-top embed-responsive-item"
            variant="top"
            src={image}
          />
          <Card.Body className="card-body text-center">
            <Card.Title>
              <strong className="text-dark heading2 mt-2">{name}</strong>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardComponent;
