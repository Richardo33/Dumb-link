import React, { useEffect, useState } from "react";
import "../style/preview.css";
import { Stack } from "react-bootstrap";
// import Zoro from "../Assets/zoro.png";
// import Fb from "../Assets/fb.png";
// import Ig from "../Assets/ig.png";
// import Twitter from "../Assets/twitter.png";
// import Youtube from "../Assets/you.png";
// import Whatsapp from "../Assets/wa.png";
// import { NavItem } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../config/api";
import { uuid } from "uuid";

function Preview() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataGroup, setDataGroup] = useState([]);
  const [dataLinks, setDataLinks] = useState([]);
  console.log(dataLinks[0]);
  console.log(id);

  const getGroup = async () => {
    try {
      const response = await API.get(`/getOneGroup/${id}`);
      console.log(response);
      setDataGroup(response.data.getData);
      setDataLinks(response.data.getData.links);
    } catch (error) {
      console.log(error);
    }
  };

  // const getLinks = async () => {
  //   try {
  //     const response = await API.get(`/getLink/${id}`);
  //     console.log(response);
  //     // setDataLinks(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getGroup();
  }, []);

  // useEffect(() => {
  //   getLinks();
  // }, []);

  return (
    <div className="d-flex">
      <div
        className="card"
        style={{ width: "700px", marginLeft: "350px", border: "none" }}
      >
        <div className="main">
          <div className="d-flex bg-warning align-items-center">
            <img
              style={{ width: "100px" }}
              src={`http://localhost:5000/upload/${dataGroup.brandImage}`}
              alt=""
            />
          </div>
          <h3 className="my-3">{dataGroup.title}</h3>
          <div>
            <p>{dataGroup.description}</p>
          </div>
        </div>
        {dataLinks.map((item) => {
          return (
            <Stack key={item.id} gap={2} className="mx-3 mb-3 bg-info">
              <div className="bg-dark d-flex">
                <img
                  style={{
                    width: "50px",
                    padding: "5px",
                    marginLeft: "20px",
                  }}
                  src={`http://localhost:5000/upload/${item.linkImage}`}
                  alt=""
                />
                <p style={{ color: "white", paddingTop: "10px" }}>
                  {item.title}
                </p>
              </div>
            </Stack>
          );
        })}
      </div>
    </div>
  );
}

export default Preview;
