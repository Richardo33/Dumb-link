import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import Logo from "../Assets/Frame.png";
import Monitor from "../Assets/PC.png";
import Phone from "../Assets/Phone.png";
import "../style/landing.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Modal className="modalll" show={show} onHide={() => setShow(false)}>
        <Modal.Title className="mx-4 py-4">Register</Modal.Title>
        <Form className="px-3">
          <Form.Group className="modalInput" controlId="inputInSignUp">
            <Form.Control
              className="mb-4"
              type="email"
              placeholder="Email"
              name="email"
            />
            <Form.Control
              className="mb-4"
              type="password"
              placeholder="Password"
              name="password"
            />
            <Form.Control
              className="mb-4"
              type="text"
              placeholder="Full Name"
              name="fullName"
            />
          </Form.Group>
          <Button
            className="buttSignUp fw-bold"
            style={{ height: "40px", width: "465px" }}
            variant="warning"
            type="submit"
            onClick={() => navigate("/home")}
          >
            <p style={{ color: "white" }}> Register </p>
          </Button>
        </Form>
        <Modal.Footer className="justify-content-center">
          Already have an account ? Klik <b>Here</b>
        </Modal.Footer>
      </Modal>

      <Modal className="modalll" show={login} onHide={() => setLogin(false)}>
        <Modal.Title className="mx-4 py-4">Login</Modal.Title>
        <Form className="px-3">
          <Form.Group className="modalInput" controlId="inputInSignUp">
            <Form.Control
              className="mb-4"
              type="email"
              placeholder="Email"
              name="email"
            />
            <Form.Control
              className="mb-4"
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button
            className="buttSignUp fw-bold"
            style={{ height: "40px", width: "465px" }}
            variant="warning"
            type="submit"
            onClick={() => navigate("/home")}
          >
            <p style={{ color: "white" }}> Login </p>
          </Button>
        </Form>
        <Modal.Footer className="justify-content-center">
          Already have an account ? Klik <b>Here</b>
        </Modal.Footer>
      </Modal>

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <img src={Logo} alt="" />
          </Navbar.Brand>

          {/* <Navbar.Collapse id="navbarScroll"> */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown.Divider />
          </Nav>
          <Form className="d-flex me-3">
            <Button
              variant="outline-success"
              className="me-3 border-0"
              onClick={() => setLogin(true)}
            >
              Login
            </Button>
            <Button
              variant="outline-success"
              className="bg-warning border-0"
              onClick={() => setShow(true)}
            >
              <h6>Register</h6>
            </Button>
          </Form>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>

      <div className="box d-flex py-5">
        <Col className="left mx-5">
          <Row className="my-5 px-5">
            <h1>The Only Link You’ll Ever Need</h1>
          </Row>
          <Row className="mb-5 px-5">
            <p>
              Add a link for your Social Bio and optimize your social media
              traffic.
            </p>
            <p>safe, fast and easy to use</p>

            <Button
              className="btn bg-dark my-3 w-50 text-center"
              onClick={() => setShow(true)}
            >
              Get Started For Free
            </Button>
          </Row>
        </Col>
        <div className="right ">
          <img className="monitor" src={Monitor} alt="" />
          <img className="phone" src={Phone} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
