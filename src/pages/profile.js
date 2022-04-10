import React, { useEffect, useState } from "react";
import Sidebar from "../component/sidebar";
import "../style/profile.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { API } from "../config/api";

function Profile() {
  const [dataUser, setDataUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await API.get("/user");
      console.log(response.data.findUser);
      setDataUser(response.data.findUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <h3>My Account</h3>
        <div className="main">
          <h3>My Information</h3>

          <Card className="card ms-4 px-3 py-2">
            <label className="mt-3 w-100">
              <b>Fullname</b>
              <input
                style={{
                  width: "900px",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  marginTop: "10px",
                }}
                defaultValue={dataUser.fullname}
              />
            </label>

            <label className="my-5 w-100">
              <b>Email</b>
              <input
                className="mb-5"
                style={{
                  width: "900px",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  marginTop: "10px",
                }}
                type="email"
                defaultValue={dataUser.email}
              />
            </label>
          </Card>

          <div className="d-flex">
            <Stack direction="row" spacing={2} className="mt-5 ms-5">
              <Button
                sx={{ bgcolor: "warning.main" }}
                style={{ height: "40px" }}
              >
                <p
                  style={{
                    color: "white",
                    paddingTop: "20px",
                    fontSize: "15px",
                  }}
                >
                  Save Account
                </p>
              </Button>
              <Button sx={{ bgcolor: "error.main" }} style={{ height: "40px" }}>
                <p
                  style={{
                    color: "white",
                    paddingTop: "20px",
                    fontSize: "15px",
                  }}
                >
                  Delete Account
                </p>
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
