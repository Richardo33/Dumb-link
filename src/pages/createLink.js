import React, { useState } from "react";
import "../style/createLink.css";
import Sidebar from "../component/sidebar";
import Phone1 from "../Assets/Phone.png";
import Button from "@mui/material/Button";
import Chessboard from "../Assets/chessboard.png";
import TextField from "@mui/material/TextField";

function CreateLink() {
  const socialMedia = [
    {
      image: "",
      title: "Facebook",
      link: "www.facebook.com",
    },
    {
      image: "",
      title: "Instagram",
      link: "www.Instagram.com",
    },
  ];

  const [imgBrand, setImgBrand] = useState(null);

  const handleImg = (e) => {
    e.preventDefault();
    setImgBrand(URL.createObjectURL(e.target.files[0]));
    console.log(imgBrand);
  };

  return (
    <div className="all">
      <div className="leftPart">
        <Sidebar />
      </div>
      <div className="rightPart">
        <h3 className="px-5 py-4">Template</h3>
        <div className="main px-5">
          <div className="d-flex">
            <h3 className="py-3">Create link</h3>
            <Button sx={{ bgcolor: "warning.main" }} className="btn ms-5">
              <p>Publish link</p>
            </Button>
          </div>
          <div className="bottom">
            <div
              className="leftCard"
              style={{
                overflow: "scroll",
                height: "500px",
                backgroundColor: "white",
                padding: "20px",
              }}
            >
              <div className="ps-3">
                <div>
                  {/* <img
                    src={imgBrand}
                    style={{ height: "auto", width: "100px" }}
                    alt=""
                  /> */}
                  {imgBrand ? (
                    <img
                      src={imgBrand}
                      style={{ height: "auto", width: "100px" }}
                      alt=""
                    />
                  ) : (
                    <img
                      src={Chessboard}
                      style={{ height: "auto", width: "100px" }}
                    />
                  )}
                  <Button
                    sx={{ bgcolor: "warning.main" }}
                    style={{ height: "30px", marginLeft: "50px" }}
                    component="label"
                  >
                    <p>Upload File</p>
                    <input type="file" hidden onChange={handleImg} />
                  </Button>
                </div>

                <div className="mb-4">
                  <TextField
                    id="standard-basic"
                    label="Title"
                    variant="standard"
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    id="standard-basic"
                    label="Description"
                    variant="standard"
                  />
                </div>
              </div>

              {socialMedia.map((item) => {
                return (
                  <div
                    className="mb-4 rounded d-flex p-3"
                    style={{ background: "#ececec" }}
                  >
                    <div>
                      <img
                        src={Chessboard}
                        style={{ width: "50px", height: "auto" }}
                        alt="foto link"
                      />
                    </div>
                    <div>
                      <div className="ms-4">
                        <TextField
                          id="standard-basic"
                          label="title link"
                          variant="standard"
                        />
                      </div>
                      <div className="ms-4">
                        <TextField
                          id="standard-basic"
                          label="link"
                          variant="standard"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div>
                <Button
                  sx={{ bgcolor: "warning.main" }}
                  className="btn-add w-100"
                >
                  <p>Add New Link</p>
                </Button>
              </div>
            </div>

            <div className="rightCard">
              <img
                src={Phone1}
                alt=""
                style={{ height: "auto", width: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateLink;
