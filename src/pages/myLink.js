import React, { useEffect, useState } from "react";
import "../style/myLink.css";
import Sidebar from "../component/sidebar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
// import MyLogo from "../Assets/Rectangle 9.png";
import { ListGroup, Modal } from "react-bootstrap";
import View from "../Assets/View.png";
import Edit from "../Assets/Edit.png";
import Delete from "../Assets/Delete.png";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";

function MyLink() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [groupLink, setGroupLink] = useState([]);
  const [idDelete, setIdDelete] = useState(null);

  const getGroup = async () => {
    try {
      const response = await API.get("/getGroup");
      console.log(response.data.getData);
      setGroupLink(response.data.getData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGroup();
  }, []);

  const handleModalDelete = async (id) => {
    try {
      setShow(true);
      setIdDelete(id);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGroup = async () => {
    try {
      const response = API.delete(`/deleteGroup/${idDelete}`);
      setShow(false);
      getGroup();
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewLink = async (id) => {
    try {
      const idGroup = id;
      navigate(`/${idGroup}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="myLink">
      <Modal show={show} onhide={() => setShow(false)}>
        <Modal.Body>
          <p className="text-secondary">
            you are sure you want to remove this link
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-danger me-3" onClick={deleteGroup}>
            <p style={{ height: "10px", color: "white" }}>Yes</p>{" "}
          </Button>
          <Button className="bg-light" onClick={() => setShow(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="leftpart">
        <Sidebar />
      </div>
      <div className="rightpart py-3">
        <div className="top">
          <h3 className="ps-5 pb-4">My Links</h3>
          <div className="crad ps-5">
            <div className="main mb-5">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <h4 className="me-5">All Links</h4>
                <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  sx={{ width: "70ch" }}
                  id="input-with-sx"
                  label="find your link"
                  variant="standard"
                />
                <Button sx={{ bgcolor: "warning.main" }} className="btn ms-5">
                  <p style={{ color: "white" }}>Search</p>
                </Button>
              </Box>
            </div>

            {groupLink.map((item) => {
              return (
                <div className="mt-5">
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <img
                      src={`http://localhost:5000/upload/${item.brandImage}`}
                      alt=""
                    />
                    <ListGroup className="pb-2 ms-4 me-5 border-0">
                      <ListGroup.Item
                        style={{ backgroundColor: "#ECECEC", border: "none" }}
                      >
                        <p style={{ height: "10px" }}>{item.title}</p>
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{ backgroundColor: "#ECECEC", border: "none" }}
                      >
                        {`localhost:3000/${item.uniqueLink}`}
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup
                      className="pb-2 mx-5 border-0"
                      style={{ backgroundColor: "#ECECEC" }}
                    >
                      <ListGroup.Item
                        style={{ backgroundColor: "#ECECEC", border: "none" }}
                      >
                        10
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{ backgroundColor: "#ECECEC", border: "none" }}
                      >
                        Visit
                      </ListGroup.Item>
                    </ListGroup>
                    <div className="group pb-4 ms-5 d-flex align-Items-flex-end">
                      <img
                        onClick={() => handleViewLink(item.uniqueLink)}
                        className="ms-5"
                        src={View}
                        style={{ cursor: "pointer" }}
                        alt=""
                      />
                      <img
                        onClick={() => navigate("/createlink")}
                        className="ms-5"
                        src={Edit}
                        style={{ cursor: "pointer" }}
                        alt=""
                      />
                      <img
                        onClick={() => handleModalDelete(item.id)}
                        className="ms-5"
                        src={Delete}
                        style={{ cursor: "pointer" }}
                        alt=""
                      />
                    </div>
                  </Box>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLink;
