import React from "react";
import Sidebar from "../component/sidebar";
import "../style/profile.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Profile() {
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
            <div>
              <Box sx={{ "& > :not(style)": { m: 1, width: "100ch" } }}>
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                />
              </Box>
            </div>
            <div className="mt-3">
              <Box sx={{ "& > :not(style)": { m: 1, width: "100ch" } }}>
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  type="email"
                />
              </Box>
            </div>
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
