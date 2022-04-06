import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../Assets/Frame.png";
// import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import Group from "../Assets/Group.png";
import Vector from "../Assets/Vector.png";
import Chain from "../Assets/link.png";
import Logout from "../Assets/logout.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            {" "}
            <img className="ms-5" src={Logo} alt="" />{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />

      <div className="d-flex flex-column height-100% justify-content-space-between">
        <div>
          <Navbar>
            <Container>
              <Navbar.Brand>
                <Link
                  className="text-decoration-none text-dark ms-5"
                  to="/home"
                >
                  <img className="pe-2" src={Group} alt="" />
                  Template
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>{" "}
          <br />
          <Navbar>
            <Container>
              <Navbar.Brand>
                <Link
                  className="text-decoration-none text-dark ms-5"
                  to="/profile"
                >
                  <img className="pe-2" src={Vector} alt="" />
                  Profile
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
          <br />
          <Navbar>
            <Container>
              <Navbar.Brand>
                <Link
                  className="text-decoration-none text-dark ms-5"
                  to="/mylink"
                >
                  <img className="pe-2" src={Chain} alt="" />
                  My Link
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
          <br />
        </div>
        <div>
          <Navbar>
            <Container>
              <Navbar.Brand>
                <button
                  style={{ border: "none", backgroundColor: "white" }}
                  onClick={() => navigate("/")}
                >
                  <img className="pe-2 ms-5" src={Logout} alt="" /> Logout
                </button>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
