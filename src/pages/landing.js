import React, { useState, useContext } from "react";
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
  Alert,
} from "react-bootstrap";
import Logo from "../Assets/Frame.png";
import Monitor from "../Assets/PC.png";
import Phone from "../Assets/Phone.png";
import "../style/landing.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

import { API, setAuthToken } from "../config/api";
// import axios from "axios";

function LandingPage() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const [state, dispacth] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  // const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(form);
      console.log(body);
      const response = await API.post("/register", body, config);
      console.log(response);
      if (response.data.status == "success bung") {
        console.log(response);
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
    }
  };

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(formLogin);
      // console.log(body);

      const response = await API.post("/login", body, config);
      console.log(response);

      if (response?.status == 200) {
        setAuthToken(response.data.data.token);

        dispacth({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
        navigate("/home");

        const alert = (
          <Alert variant="success" className="py-1">
            Login success
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };
  // console.log(state);

  return (
    <div>
      <Modal className="modalll" show={show} onHide={() => setShow(false)}>
        <Modal.Title className="mx-4 py-4">Register</Modal.Title>
        {message && message}
        <Form onSubmit={handleSubmit} className="px-3">
          <Form.Group className="modalInput" controlId="inputregister">
            <Form.Control
              className="mb-4"
              type="email"
              placeholder="Email"
              name="email"
              // value={email}
              onChange={handleChange}
            />
            <Form.Control
              className="mb-4"
              type="password"
              placeholder="Password"
              name="password"
              // value={password}
              onChange={handleChange}
            />
            <Form.Control
              className="mb-4"
              type="text"
              placeholder="Full Name"
              name="fullname"
              // value={fullname}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            className="buttSignUp fw-bold"
            style={{ height: "40px", width: "465px" }}
            variant="warning"
            type="submit"
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
        {message && message}
        <Form onSubmit={handleSubmitLogin} className="px-3">
          <Form.Group className="modalInput" controlId="inputInSignUp">
            <Form.Control
              className="mb-4"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChangeLogin}
            />
            <Form.Control
              className="mb-4"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChangeLogin}
            />
          </Form.Group>
          <Button
            className="buttSignUp fw-bold"
            style={{ height: "40px", width: "465px" }}
            variant="warning"
            type="submit"
            // onClick={() => navigate("/home")}
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
            <h1
              style={{
                marginRight: "20px",
                paddingRight: "20px",
                fontSize: "64px",
              }}
            >
              The Only Link
              <br /> You’ll Ever Need
            </h1>
          </Row>
          <Row className="mb-5 px-5">
            <p style={{ color: "white" }}>
              Add a link for your Social Bio and optimize your <br /> social
              media traffic.
            </p>
            <p style={{ color: "white" }}> safe, fast and easy to use</p>

            <Button
              className="btn bg-dark my-3 w-50 text-center"
              style={{ borderRadius: "10px" }}
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
