import React, { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../Assets/Frame.png";
// import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import Group from "../Assets/temp.png";
import Vector from "../Assets/Vector.png";
import Chain from "../Assets/link.png";
import Logout from "../Assets/logout.png";
import { useNavigate } from "react-router-dom";
import "../style/sidebar.css";
import { UserContext } from "../context/userContext";
import { setAuthToken } from "../config/api";
// import { useContext } from "react";

function Sidebar() {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  function handleLogout() {
    setUser({
      type: "LOGOUT",
      user: {},
    });
    navigate("/");
  }

  return (
    <div className="sidebar">
      <Navbar>
        <Container>
          <Navbar.Brand>
            {" "}
            <img className="logo ms-5" src={Logo} alt="" />{" "}
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
                  className="text-decoration-none text-dark ms-5 d-flex"
                  to="/home"
                >
                  <img className="pe-2" src={Group} alt="" />
                  <p>Template</p>
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>{" "}
          <br />
          <Navbar>
            <Container>
              <Navbar.Brand className="navig">
                <Link
                  className="text-decoration-none text-dark ms-5 d-flex"
                  to="/profile"
                >
                  <img className="pe-2" src={Vector} alt="" />
                  <p>Profile</p>
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
          <br />
          <Navbar>
            <Container>
              <Navbar.Brand>
                <Link
                  className="text-decoration-none text-dark ms-5 d-flex"
                  to="/mylink"
                >
                  <img className="pe-2" src={Chain} alt="" />
                  <p>My Link</p>
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
                  onClick={handleLogout}
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
