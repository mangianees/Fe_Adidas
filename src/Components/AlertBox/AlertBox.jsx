import { Alert, Col, Container, Row, Button } from "react-bootstrap";
import "../Header/Header.css";

export const AlertBox = ({ onClose }) => {
  return (
    <Alert className="custom-alert headerBackground" dismissible>
      <Button
        onClick={onClose} // Close alert when button clicked
        variant="outline-light"
        className="close-btn"
      >
        Close
      </Button>
      <Container fluid>
        <Row className="align-items-center">
          <Col>
            <h6>FREE STANDARD DELIVERY WITH ADICLUB</h6>
            <p>
              Sign up for adiClub to enjoy free standard delivery and earn points on every order.
            </p>
            <a href="#">JOIN ADICLUB FOR FREE</a> | <a href="#">LEARN MORE</a>
          </Col>
          <Col>
            <h6>GET UP TO 50% OFF</h6>
            <p>Winter is coming! Grab some warm 3-stripe styles in our Winter Sale.</p>
            <a href="#">Shop Now</a>
          </Col>
          <Col>
            <h6>FREE RETURNS & EXCHANGE</h6>
            <p>
              Exchange or Return item(s) within 30 days for free. Customised products cannot be
              returned.
            </p>
            <a href="#">READ MORE ON RETURN</a> | <a href="#">READ MORE ON EXCHANGE</a>
          </Col>
        </Row>
      </Container>
    </Alert>
  );
};
