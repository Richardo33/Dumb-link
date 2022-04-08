import React from "react";
import "../style/preview.css";
import { Stack } from "react-bootstrap";
import Zoro from "../Assets/zoro.png";
import Fb from "../Assets/fb.png";
import Ig from "../Assets/ig.png";
import Twitter from "../Assets/twitter.png";
import Youtube from "../Assets/you.png";
import Whatsapp from "../Assets/wa.png";

function Preview() {
  return (
    <div className="d-flex">
      <div
        className="card"
        style={{ width: "700px", marginLeft: "350px", border: "none" }}
      >
        <div className="main">
          <div className="d-flex bg-warning align-items-center">
            <img style={{ width: "100px" }} src={Zoro} alt="" />
          </div>
          <h3 className="my-3">Pirate hunter</h3>
          <div>
            <p>
              I won’t lose to anyone until I become the Strongest Swordsman and
              defeat him
            </p>
          </div>
        </div>
        <Stack gap={2} className="mx-3 mb-3">
          <div className="bg-dark d-flex">
            <img
              style={{ width: "50px", marginLeft: "20px" }}
              src={Fb}
              alt=""
            />
            <p style={{ color: "white", paddingTop: "10px" }}>Facebook</p>
          </div>
          <div className="bg-dark d-flex">
            <img
              style={{ width: "50px", marginLeft: "20px" }}
              src={Ig}
              alt=""
            />
            <p style={{ color: "white", paddingTop: "10px" }}>Instagram</p>
          </div>
          <div className="bg-dark d-flex">
            <img
              style={{ width: "50px", marginLeft: "20px" }}
              src={Twitter}
              alt=""
            />
            <p style={{ color: "white", paddingTop: "10px" }}>Twitter</p>
          </div>
          <div className="bg-dark d-flex">
            <img
              style={{ width: "50px", marginLeft: "20px" }}
              src={Youtube}
              alt=""
            />
            <p
              style={{
                display: "flex",
                color: "white",
                paddingTop: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Youtube
            </p>
          </div>
          <div className="bg-dark d-flex">
            <img
              style={{ width: "50px", padding: "5px", marginLeft: "20px" }}
              src={Whatsapp}
              alt=""
            />
            <p style={{ color: "white", paddingTop: "10px" }}>Whatsapp</p>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Preview;
