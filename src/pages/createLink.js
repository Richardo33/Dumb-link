import React, { useState } from "react";
import "../style/createLink.css";
import Sidebar from "../component/sidebar";
import Phone1 from "../Assets/Phone.png";
import Button from "@mui/material/Button";
import Chessboard from "../Assets/chessboard.png";
import TextField from "@mui/material/TextField";
import { API } from "../config/api";
import { Alert } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function CreateLink() {
  const unique_link = uuid();
  const [message, setMessage] = useState(null);
  const [links, setLinks] = useState([]);
  // console.log(links);

  const [addGroup, setAddGroup] = useState({
    brandImage: "",
    title: "",
    description: "",
    uniqueLink: "",
  });

  const [addLink, setAddLink] = useState({
    linkImage: "",
    title: "",
    url: "",
  });

  const handleAddLink = () => {
    setLinks([...links, addLink]);
  };

  const [imgBrand, setImgBrand] = useState(null);

  const onChangeNewGroup = (e) => {
    setAddGroup({
      ...addGroup,
      [e.target.name]:
        e.target.type == "file" ? e.target.files : e.target.value,
    });
    // console.log(addGroup);
  };

  const onChangeNewLinks = (e) => {
    setAddLink({
      ...addLink,
      [e.target.name]:
        e.target.type == "file" ? e.target.files : e.target.value,
    });
    console.log(addLink);
  };

  const handlePublishLink = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formDataGroup = new FormData();
      formDataGroup.set(
        "brandImage",
        addGroup.brandImage[0],
        addGroup.brandImage[0].name
      );
      formDataGroup.set("title", addGroup.title);
      formDataGroup.set("description", addGroup.description);
      formDataGroup.set("uniqueLink", unique_link.slice(0, 8));

      const response = await API.post("/grouplink", formDataGroup, config);
      console.log(response);
      const idGroup = response.data.dataGroup.id;
      console.log(idGroup);

      // console.log(addLink);
      for (let index = 0; index < links.length; index++) {
        // console.log(index);
        const formDataLink = new FormData();
        formDataLink.set(
          "linkImage",
          links[index].linkImage[0],
          links[index].linkImage[0].name
        );
        formDataLink.set("title", links[index].title);
        formDataLink.set("url", links[index].url);
        formDataLink.set("idGroupLink", idGroup);

        const response = await API.post("/addLink", formDataLink, config);
        console.log(response);
      }

      if (response.data.status == "success") {
        const alert = <Alert variant="success">Publish link success</Alert>;

        setMessage(alert);
      }
    } catch (error) {
      console.log(error);
      const alert = <Alert variant="danger">Publish link failed</Alert>;

      setMessage(alert);
    }
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
            <Button
              onClick={handlePublishLink}
              sx={{ bgcolor: "warning.main" }}
              className="btn ms-5"
            >
              <p>Publish link</p>
            </Button>
          </div>
          {message}
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
                  {addGroup.brandImage ? (
                    <img
                      src={URL.createObjectURL(addGroup.brandImage[0])}
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
                    <input
                      type="file"
                      name="brandImage"
                      hidden
                      onChange={onChangeNewGroup}
                    />
                  </Button>
                </div>

                <div className="mb-4">
                  <TextField
                    id="standard-basic"
                    label="Title"
                    variant="standard"
                    name="title"
                    onChange={onChangeNewGroup}
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    id="standard-basic"
                    label="Description"
                    variant="standard"
                    name="description"
                    onChange={onChangeNewGroup}
                  />
                </div>
              </div>

              {links.map((item, index) => {
                return (
                  <div
                    className="mb-4 rounded d-flex p-3"
                    style={{ background: "#ececec" }}
                  >
                    <div>
                      <img
                        key={index}
                        src={URL.createObjectURL(item.linkImage[0])}
                        style={{ height: "auto", width: "100px" }}
                      />
                    </div>
                    <div>
                      <div className="ms-4">
                        <TextField
                          id="standard-basic"
                          label="title link"
                          variant="standard"
                          name="title"
                          defaultValue={item.title}
                          onChange={onChangeNewLinks}
                        />
                      </div>
                      <div className="ms-4">
                        <TextField
                          id="standard-basic"
                          label="link"
                          variant="standard"
                          name="url"
                          defaultValue={item.url}
                          onChange={onChangeNewLinks}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div
                className="mb-4 rounded d-flex p-3"
                style={{ background: "#ececec" }}
              >
                <div>
                  <label style={{ cursor: "pointer" }}>
                    {addLink.linkImage ? (
                      <img
                        src={URL.createObjectURL(addLink.linkImage[0])}
                        style={{ height: "auto", width: "100px" }}
                        alt=""
                      />
                    ) : (
                      <img
                        src={Chessboard}
                        style={{ height: "auto", width: "100px" }}
                      />
                    )}
                    <input
                      hidden
                      type="file"
                      name="linkImage"
                      // style={{ cursor: "pointer" }}
                      onChange={onChangeNewLinks}
                    />
                  </label>
                </div>
                <div>
                  <div className="ms-4">
                    <TextField
                      id="standard-basic"
                      label="title link"
                      variant="standard"
                      name="title"
                      onChange={onChangeNewLinks}
                    />
                  </div>
                  <div className="ms-4">
                    <TextField
                      id="standard-basic"
                      label="link"
                      variant="standard"
                      name="url"
                      onChange={onChangeNewLinks}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Button
                  sx={{ bgcolor: "warning.main" }}
                  className="btn-add w-100"
                  onClick={handleAddLink}
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
